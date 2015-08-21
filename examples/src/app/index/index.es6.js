'use strict';

import m from 'mithril';
import github from 'app/app/github';
require('app/app/common.css!');
require('./index.css!');

const menuData = [
    {
        href: 'simple.html',
        title: 'Simple',
        subtitle: 'Mithril version of ccoenraets/pageslider-react'
    },
    {
        href: 'list.html',
        title: 'List with 3 levels',
        subtitle: 'Try with the browser\'s back and forward buttons'
    },
    {
        href: 'rtl.html',
        title: 'Right-to-left',
        subtitle: 'Languages like Arabic, Hebrew, ...'
    }
];

const menu = m('ul.menu', [
    m('li.header', 'Examples'),
    menuData.map(menuItem => {
        return m('li', m('a',
            {
                href: menuItem.href,
                config: null
            }, [
                m('span.title', menuItem.title),
                m('span.subtitle', menuItem.subtitle)
            ]
        ));
    })
]);

let app = {};
app.view = () => {
    return m('div', [
        m('h1', 'Page Slider for Mithril'),
        menu,
        github({home: true})
    ]);
};

m.mount(document.body, app);
