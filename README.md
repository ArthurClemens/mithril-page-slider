# Page Slider for Mithril

Component to create page transitions in a Mithril application.

Version 0.1.0


## Examples

* [Examples](http://arthurclemens.github.io/mithril-page-slider/index.html)

The examples use [Ratchet](http://goratchet.com) for some CSS boilerplate. The page slider works fine without.



## Features

* Small footprint
* Transitions can be customized with CSS
* Right to left language support, using reverse transitions
* Browser back/forward button support



## Installation

Either:

* Download or clone from Github
* `npm install mithril-page-slider`

For development:

* In the root directory: `npm install`


## Usage

Import the component:

	import pageSlider from 'mithril-page-slider';

There are 2 types of calls to the component:

1. Routes
2. Links


### Routes

For routes and route changes we use the slider component to wrap our content in a horizontal container. The slider wraps a maximum of 3 pages: the current page, the next and the previous page.

If we have a page component:

	const page1 = {};
	page1.view = () => {
		...
	};

We wrap it in the slider like this:

	m.component(pageSlider, {
        page: page1
    });

The `page` parameter is required.

We can create a function for this:

	const slider = (page) => {
	    return m.component(pageSlider, {
	        page: page
	    });
	};

So that the route configuration become a bit neater:

	m.route(document.body, '/', {
	    '/': slider(home),
	    '/page1': slider(page1),
	    '/page2': slider(page2)
	});


### Links

With links we transition from one page to the other. For instance, a back link can look like this:

	m('a', {
        href: '/',
        config: pageSlider.slideOutConfig({page: home})
    }, 'Back')

`pageSlider.slideOutConfig` is a convenience function that creates a route config for the link element. The destination - the desired `route` - is automatically set to the link's `href` attribute. See also "Custom link configs" below.

If we want to pass more parameters it may be useful to wrap the call in a function. For instance:

	const slide = (direction, page, title) => {
	    const fn = direction === 'out' ? pageSlider.slideOutConfig : pageSlider.slideInConfig;
	    return fn({
	        page: page,
	        done: () => setDocumentTitle(title)
	    });
	};

And the link config can still be pretty small:

	m('a', {
	    href: '/page1',
	    config: slide('in', page1, 'Page 1')
	}, 'Page 1')


The examples offer more complete illustrations of usage.



### Configuration parameters

Parameters can be used for route and link calls, with the exeption of transition parameters `direction` and `duration` that don't have any effect on route calls, obviously.


| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **page** | required | Mithril Template or Component | | Page to show or move to | 
| **route** | optional | String | The result of `m.route()` | The destination route; by default provided with the link config |
| **duration** | optional | Number | 360 | Transition duration in ms |
| **rtl** | optional | Boolean | `false` | Set to true to mirror transitions; pass this to all calls |
| **done** | optional | Function | | Called at the end of a transition, after the route change; also called for the first page (when no route change is applied) |

Expert parameters:

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **direction** | optional | Number: 1 or -1 | 1 | Transition direction, where -1 stands for backward (regardless the writing orientation) |
| **slider** | optional | String | 'default' | ID for each slider, in case multiple sliders are used |
| **id** | optional | String | The value of `route` | An id is used for each page state to distinguish pages and assign navigation depth; not required when `route` is used |


### Methods

	RouteConfig pageSlider.slideInConfig(Object options)

Where `options` contains configuration parameters. Returns a route config function.

	RouteConfig pageSlider.slideOutConfig(Object options)

Where `options` contains configuration parameters. Returns a route config function.

	void pageSlider.slideIn(Object options)

Where `options` contains configuration parameters.

	void pageSlider.slideOut(Object options)

Where `options` contains configuration parameters.



### Custom link configs

`pageSlider.slideInConfig` and `pageSlider.slideOutConfig` are convenience functions for links. If you need more customization, you can create your own. The functions return a route config function:

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

Where `fn` can either be `pageSlider.slideIn` or `pageSlider.slideOut`.




## Size

Minified and gzipped: 1.6 Kb



## Dependencies

* [Mithril](https://www.npmjs.com/package/mithril)



## Licence

MIT



## TODO

* Remember scroll position when going to the previous page



