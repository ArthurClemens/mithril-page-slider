'use strict';

import m from 'mithril';
import pageSlider from 'mithril-page-slider';
import github from 'app/app/github';

import styleFn from 'mithril-page-slider-style';
import sliderStyle from './effect-transition-style';
const style = styleFn(sliderStyle);

import styler from 'app/app/styler';
styler.add('mithril-page-slider', style);

import commonStyle from 'app/app/common-style';
import simpleStyle from 'app/simple/simple-style';
styler.add('common', commonStyle);
styler.add('simple', simpleStyle);

const home = {};
const page1 = {};
const page2 = {};

// page wrapper
// this function is called at route change
const slider = (page) => {
    return m.component(pageSlider, {
        page: page,
        class: 'effect'
    });
};

const header = (text, back) => {
    return m('header.bar.bar-nav',
        back ? m('a', {
            href: back.href,
            class: 'icon icon-left-nav pull-left',
            config: pageSlider.slideOutConfig({
                page: back.page
            })
        }) : null,
        m('h1.title', text)
    );
};

const imageUrl = (filename) => 'http://arthurclemens.github.io/assets/mithril-page-slider/img/' + filename;

const card = (name, image) => {
    return m('.card',
        m('ul.table-view',
            m('li.table-view-cell media',
                m('a',
                    m('img.media-object.pull-left.avatar', {
                        style: {
                            'background-image': 'url(' + imageUrl(image) + ')'
                        }
                    }),
                    m('.media-body', name)
                )
            )
        )
    );
};

home.view = () => {
    return m('div',
        header('Page Slider for Mithril - Effects'),
        m('.content', [
            m('ul.table-view',
                m('li.table-view-cell.media',
                    m('a', {
                        href: '/page1',
                        config: m.route
                    }, 'Page 1')
                ),
                m('li.table-view-cell.media',
                    m('a', {
                        href: '/page2',
                        config: m.route
                    }, 'Page 2')
                )
            ),
            github()
        ])
    );
};

page1.view = () => {
    return m('.card-page',
        header('Page 1', {
            href: '/',
            page: home
        }),
        m('.content',
            card('Susan', '1.png')
        )
    );
};

page2.view = () => {
    return m('.card-page',
        header('Page 2', {
            href: '/',
            page: home
        }),
        m('.content',
            card('Amy', '2.png')
        )
    );
};

m.route.mode = 'hash';
m.route(document.body, '/', {
    '/': slider(home),
    '/page1': slider(page1),
    '/page2': slider(page2)
});