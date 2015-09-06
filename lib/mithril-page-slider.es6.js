'use strict';

import m from 'mithril';

const DEFAULT_SLIDER_ID = 'default';
const DEFAULT_DURATION = 360;
const DEFAULT_ORIENTATION = 'ltr';
const RTL_ORIENTATION = 'rtl';
const DIRECTION_FORWARD = 1;
const DIRECTION_FORWARD_CLASS = 'forward';
const DIRECTION_BACKWARD = -1;
const DIRECTION_BACKWARD_CLASS = 'backward';

const vms = {}; // cache of ViewModels accessible by ID

const pageSlider = {};

const prefixes = ['webkit', 'moz', 'ms', 'o', ''];
const prefixedEvent = (element, type, callback) => {
    for (let p = 0; p < prefixes.length; p++) {
        if (!prefixes[p]) {
            type = type.toLowerCase();
        }
        element.addEventListener(prefixes[p] + type, callback, false);
    }
};

const ViewModel = () => {
    let transition = m.prop({});
    return {
        pageElements: {},
        transition: transition,
        clearTransition: () => {
            transition().page = undefined;
        },
        hasTransition: () => {
            return transition().page !== undefined;
        },
        orientation: m.prop(DEFAULT_ORIENTATION),
        current: m.prop(),
        currentId: m.prop(),
        previous: m.prop(),
        next: m.prop(),
        history: m.prop({}),
        depth: m.prop(0)
    };
};

const getViewModel = (id = DEFAULT_SLIDER_ID) => {
    vms[id] = vms[id] || new ViewModel();
    return vms[id];
};

const pageElProps = (which, key, duration, vm, opts) => ({
    key: key,
    class: opts.pageClass || null,
    config: (el, inited) => {
        if (inited) {
            return;
        }
        vm.pageElements[which] = el;
    },
    style: {
        '-webkit-animation-duration': duration + 'ms',
        'animation-duration': duration + 'ms'
    }
});

const slide = (opts) => {
    const sliderId = opts.slider || DEFAULT_SLIDER_ID;
    const vm = getViewModel(sliderId);
    if (vm.hasTransition()) {
        return;
    }

    const route = opts.route || m.route();
    const id = opts.id || route;

    if (vm.currentId() === id) {
        return;
    }

    const transition = {
        page: opts.page,
        id: id,
        route: route,
        done: opts.done,
        direction: opts.direction || DIRECTION_FORWARD,
        duration: opts.duration || DEFAULT_DURATION
    };
    vm.orientation(opts.rtl ? RTL_ORIENTATION : DEFAULT_ORIENTATION);
    if (!vm.current()) {
        // first page, not sliding
        vm.current(transition.page);
        vm.currentId(transition.id);
        vm.history()[transition.route] = 0;
        if (transition.done) {
            transition.done();
        }
        vm.clearTransition();
    } else {
        const depth = vm.depth();
        const historyDepth = vm.history()[route];
        const newDepth = (historyDepth !== undefined) ? historyDepth : depth + transition.direction;
        const backward = opts.direction === DIRECTION_BACKWARD ? true : newDepth < depth;
        vm.depth(newDepth);
        vm.history()[route] = newDepth;

        if (backward) {
            transition.direction = DIRECTION_BACKWARD;
            vm.previous(transition.page);
        } else {
            transition.direction = DIRECTION_FORWARD;
            vm.next(transition.page);
        }
        vm.transition(transition);
    }
    m.redraw();
};

const slideDone = (vm) => {
    const transition = vm.transition();
    const route = transition.route;
    const done = transition.done;
    vm.current(transition.page);
    vm.currentId(transition.id);
    if (transition.direction === DIRECTION_BACKWARD) {
        vm.next(vm.current());
        vm.previous(null);
    } else {
        vm.previous(vm.current());
        vm.next(null);
    }
    vm.clearTransition();
    m.route(route);
    if (done) {
        done();
    }
};

const createView = (opts, sliderId) => {
    const vm = getViewModel(sliderId);
    const previous = vm.previous();
    const current = vm.current();
    const next = vm.next();
    const transition = vm.transition();
    const isAnimating = vm.hasTransition();
    const orientation = vm.orientation();
    const duration = (transition.duration !== undefined) ? transition.duration : DEFAULT_DURATION;
    const directionClass = transition.direction === DIRECTION_FORWARD ? DIRECTION_FORWARD_CLASS : DIRECTION_BACKWARD_CLASS;
    const pages = [
        previous ? m('.page.previous', pageElProps('previous', 1, duration, vm, opts), previous) : null,
        current ? m('.page.current', pageElProps('current', 2, duration, vm, opts), current) : null,
        next ? m('.page.next', pageElProps('next', 3, duration, vm, opts), next) : null
    ];
    if (orientation === RTL_ORIENTATION) {
        pages.reverse();
    }
    return m('div', {
        class: ['pageSlider', isAnimating ? 'animating' : null, directionClass, orientation, opts.class || null].join(' '),
        config: () => {
            if (isAnimating) {
                const done = () => {
                    slideDone(vm);
                };
                prefixedEvent(vm.pageElements.current, 'AnimationEnd', done);
            }
        }
    }, pages);
};

const slideConfig = (fn, opts) => {
    return (element, inited) => {
        if (inited) {
            return;
        }
        element.onclick = (e) => {
            e.preventDefault();
            opts.route = element.getAttribute('href');
            fn(opts);
        };
    };
};

pageSlider.slideInConfig = (opts) => {
    return slideConfig(pageSlider.slideIn, opts);
};

pageSlider.slideOutConfig = (opts) => {
    return slideConfig(pageSlider.slideOut, opts);
};

pageSlider.slideIn = (opts) => {
    opts.direction = DIRECTION_FORWARD;
    slide(opts);
};

pageSlider.slideOut = (opts) => {
    opts.direction = DIRECTION_BACKWARD;
    slide(opts);
};

pageSlider.view = (ctrl, opts = {}) => {
    const sliderId = opts.slider || DEFAULT_SLIDER_ID;
    const vm = getViewModel(sliderId);
    if (!vm.hasTransition()) {
        const page = opts.page;
        if (page) {
            slide({
                slider: sliderId,
                page: page,
                id: opts.id,
                route: opts.route,
                done: opts.done,
                rtl: opts.rtl
            });
        }
    }
    return createView(opts, sliderId);
};

export default pageSlider;
