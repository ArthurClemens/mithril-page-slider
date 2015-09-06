'use strict';

import m from 'mithril';
import pageSlider from 'mithril-page-slider';
import github from 'app/app/github';

// demo data
const people = [
    'Alexis',
    'Betty',
    'Caroline',
    'Denise',
    'Elsa',
    'Francesca',
    'Grace',
    'Hannah',
    'Irene',
    'Jackie',
    'Kate',
    'Laureen',
    'Madelyn',
    'Nadine',
    'Olive',
    'Paula',
    'Rebecca',
    'Sara',
    'Tina',
    'Una',
    'Vera',
    'Wendy',
    'Yvonne',
    'Zoe'
];

// 3 types of page:
const home = {};
const person = {};
const detail = {};

const TYPE_HOME = 'home';
const TYPE_PERSON = 'person';
const TYPE_DETAIL = 'detail';

const createTitle = (type) => {
    const name = m.route.param('person');
    switch (type) {
        case TYPE_HOME:
            return 'Page Slider for Mithril - List';
        case TYPE_PERSON:
            return name;
        case TYPE_DETAIL:
            return 'About ' + name;
    }
};

const setDocumentTitle = (type) => {
    document.title = createTitle(type);
};

// page wrapper
// this function is called at route change
const slider = (page, type) => {
    return {
        view: () => {
            return m.component(pageSlider, {
                page: m.component(page, {
                    name: m.route.param('person')
                }),
                class: 'list',
                done: () => setDocumentTitle(type)
            });
        }
    };
};

// convenience function for links
// calls either pageSlider.slideInConfig or pageSlider.slideOutConfig
// and returns a config funtion
const slide = (direction, page, type) => {
    const fn = direction === 'out' ? pageSlider.slideOutConfig : pageSlider.slideInConfig;
    return fn({
        page: page,
        done: () => setDocumentTitle(type)
    });
};

home.view = () => {
    const pageTitle = createTitle(TYPE_HOME);

    return m('div', [
        m('header.bar.bar-nav',
            m('h1.title', pageTitle)
        ),
        m('.content',
            m('ul.table-view', people.map((name) => {
                const personRoute = '/' + name;
                return m('li.table-view-cell media',
                    m('a', {
                        href: personRoute,
                        config: slide('in', m.component(person, {name: name}), TYPE_PERSON)
                    }, name)
                );
            })),
            github()
        )
    ]);
};

person.view = (ctrl, opts = {}) => {
    const name = opts.name || m.route.param('person');
    const pageTitle = name;
    const homeRoute = '/';
    const detailsRoute = '/' + name + '/details';

    return m('div', [
        m('header.bar.bar-nav',
            m('a', {
                href: homeRoute,
                class: 'icon icon-left-nav pull-left',
                config: slide('out', home, TYPE_HOME)
            }),
            m('h1.title', pageTitle)
        ),
        m('.content', [
            m('a.large', {
                href: detailsRoute,
                config: slide('in', m.component(detail, {name: name}), TYPE_DETAIL)
            }, name[0]),
            m('a', {
                href: detailsRoute,
                config: slide('in', m.component(detail, {name: name}), TYPE_DETAIL)
            }, 'More about ' + name)
        ])
    ]);
};

detail.view = (ctrl, opts = {}) => {
    const name = opts.name || m.route.param('person');
    const pageTitle = 'About ' + name;
    const personRoute = '/' + name;

    return m('div', [
        m('header.bar.bar-nav',
            m('a', {
                href: personRoute,
                class: 'icon icon-left-nav pull-left',
                config: slide('out', m.component(person, {name: name}), TYPE_PERSON)
            }),
            m('h1.title', pageTitle)
        ),
        m('.content',
            m('.more', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        )
    ]);
};

m.route.mode = 'hash';
m.route(document.body, '/', {
    '/': slider(home, TYPE_HOME),
    '/:person.../details': slider(detail, TYPE_DETAIL),
    '/:person...': slider(person, TYPE_PERSON)
});
