'use strict';

import m from 'mithril';

let content = (opts = {}) => {
	return m('.github', [
		!opts.home ? m('a', {href: 'index.html', config: null}, 'All Examples') : null,
		m('hr'),
		m.trust('mithril-page-slider, Page slider for Mithril for mobile and desktop. Project page on <a href="https://github.com/ArthurClemens/mithril-page-slider">Github</a>.')
	]);
};

export default content;
