import m from 'mithril';
import pageSlider from 'mithril-page-slider';
import toolbar from 'polythene/toolbar/toolbar';
import list from 'polythene/list/list';
import cardCmp from 'polythene/card/card';
import listTile from 'polythene/list-tile/list-tile';
import iconBtn from 'polythene/icon-button/icon-button';
import github from 'app/app/github';

import styleFn from 'mithril-page-slider-style';
import sliderStyle from 'mithril-page-slider-transition-style';
const style = styleFn(sliderStyle);

import styler from 'app/app/styler';
styler.add('mithril-page-slider', style);

import commonStyle from 'app/app/common-style';
import polytheneStyle from './polythene-style';
styler.add('common', commonStyle);
styler.add('polythene', polytheneStyle);

const home = {};
const page1 = {};
const page2 = {};

// header
const iconBackSVG = m.trust('<svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>');
const header = (title, url) => (
    m.component(toolbar, {
        content: [
            url ? m.component(iconBtn, {
                icon: {
                    svg: {
                        content: iconBackSVG
                    }
                },
                url: {
                    href: url.href,
                    config: pageSlider.slideOutConfig({
                        page: url.page
                    })
                }
            }) : null,
            m('span', title)
        ]
    })
);

// page wrapper
// this function is called at route change
const slider = (page) => {
    return m.component(pageSlider, {
        page,
        class: 'toolbar'
    });
};

const imageUrl = (filename) => 'http://arthurclemens.github.io/assets/mithril-page-slider/img/' + filename;

const card = (name, image) => {
    return m.component(cardCmp, {
        content: [{
            header: {
                title: name,
                icon: {
                    type: 'large',
                    class: 'pe-icon--avatar',
                    src: imageUrl(image)
                }
            }
        }]
    });
};

home.view = () => {
    return m('div',
        m('.content', [
            header('Page Slider for Mithril - Toolbar'),
            m.component(list, {
                borders: true,
                tiles: [
                    m.component(listTile, {
                        content: m('a', {
                            href: '/page1',
                            config: m.route
                        }, 'Page 1')
                    }),
                    m.component(listTile, {
                        content: m('a', {
                            href: '/page2',
                            config: m.route
                        }, 'Page 2')
                    })
                ]
            }),
            github()
        ])
    );
};

page1.view = () => {
    return m('.card-page',
        m('.content', [
            header('Page 1', {
                href: '/',
                page: home
            }),
            card('Susan', '1.png')
        ])
    );
};

page2.view = () => {
    return m('.card-page',
        m('.content', [
            header('Page 2', {
                href: '/',
                page: home
            }),
            card('Amy', '2.png')
        ])
    );
};

m.route.mode = 'hash';
m.route(document.body, '/', {
    '/': slider(home),
    '/page1': slider(page1),
    '/page2': slider(page2)
});
