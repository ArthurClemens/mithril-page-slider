'use strict';

import m from 'mithril';
import pageSlider from 'mithril-page-slider';
import github from 'app/app/github';
require('./rtl.css!');
require('app/app/common.css!');
require('ratchet/css/ratchet.min.css!');
require('ratchet/css/ratchet-theme-ios.min.css!');

const home = {};
const page1 = {};
const page2 = {};

const TITLE_PAGE1 = 'اليوم';
const TITLE_PAGE2 = 'واجب اليوم';
const NAME_1 = 'سوزان';
const NAME_2 = 'ايمي';

// page wrapper
// this function is called at route change
const slider = (page) => {
    return m.component(pageSlider, {
        page: page,
        rtl: true
    });
};

const header = (text, back) => {
    return m('header.bar.bar-nav',
        back ? m('a', {
            href: back.href,
            class: 'icon icon-right-nav pull-right',
            config: pageSlider.slideOutConfig({
                page: back.page,
                rtl: true
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
                    m('img.media-object.pull-right.avatar', {
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
        header('Page Slider for Mithril - Right to Left'),
        m('.content', [
            m('ul.table-view',
                m('li.table-view-cell.media',
                    m('a', {href: '/page1', config: m.route}, TITLE_PAGE1)
                ),
                m('li.table-view-cell.media',
                    m('a', {href: '/page2', config: m.route}, TITLE_PAGE2)
                )
            ),
            github()
        ])
    );
};

page1.view = () => {
    return m('.card-page',
        header(TITLE_PAGE1, {
            href: '/',
            page: home
        }),
        m('.content',
            card(NAME_1, '1.png')
        )
    );
};

page2.view = () => {
    return m('.card-page',
        header(TITLE_PAGE2, {
            href: '/',
            page: home
        }),
        m('.content',
            card(NAME_2, '2.png')
        )
    );
};

m.route.mode = 'hash';
m.route(document.body, '/', {
    '/': slider(home),
    '/page1': slider(page1),
    '/page2': slider(page2)
});