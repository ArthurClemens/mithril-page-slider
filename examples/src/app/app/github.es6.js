'use strict';

import m from 'mithril';

let content = (opts = {}) => {
	return m('.github', {dir: 'ltr'}, [
		!opts.home ? m('a', {href: 'index.html', config: null}, 'All examples') : null,
		m('hr'),
		m.trust('mithril-page-slider, Page Slider for Mithril on mobile and desktop. Project page on <a href="https://github.com/ArthurClemens/mithril-page-slider">Github</a>.')
	]);
};

export default content;
