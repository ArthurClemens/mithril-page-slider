import m from 'mithril';
import github from 'app/app/github';

import styler from 'app/app/styler';
import commonStyle from 'app/app/common-style';
import indexStyle from './index-style';
styler.add('common', commonStyle);
styler.add('index', indexStyle);

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
    },
    {
        href: 'effect.html',
        title: 'Transition effects',
        subtitle: 'Custom transition style'
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

let index = {};
index.view = () => {
    return m('.index', [
        m('h1', 'Page Slider for Mithril'),
        menu,
        github({home: true})
    ]);
};

m.mount(document.body, index);
