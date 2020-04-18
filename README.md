# Page Slider for Mithril on mobile and desktop



## DEPRECATED

This package is superseded by https://github.com/ArthurClemens/glissando

---

Component to create page-to-page transitions in a Mithril application.


## Examples

* [Examples](http://arthurclemens.github.io/mithril-page-slider/index.html)

The examples use [Ratchet](http://goratchet.com) for some CSS boilerplate. The page slider works fine without.



## Features

* Small footprint
* Transitions can be customized with CSS
* Right-to-left language support, using mirrored transitions
* Browser back/forward button support



## Installation

Use as npm module:

~~~bash
npm install mithril-page-slider
~~~

or download/clone from Github, then in the root directory: `npm install`

For working with the examples, see [Viewing the examples](#viewing-the-examples) below.



## Usage

Import the component:

	import pageSlider from 'mithril-page-slider';

There are 2 types of calls to the component (you will need both):

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

Used in the routing configuration:

	m.route(document.body, '/', {
	    '/': m.component(pageSlider, {
	        page: home
	    })
	    '/page1': m.component(pageSlider, {
	        page: page1
	    })
	    '/page2': m.component(pageSlider, {
	        page: page2
	    })
	});


We can create a function for this:

	const slider = (page) => {
	    return m.component(pageSlider, {
	        page: page
	    });
	};

So that the route configuration becomes more readable:

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

#### Route parameters

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **page** | required | Mithril Template or Component | | Page to show |
| **rtl** | optional | Boolean | `false` | Right-to-left language support (for instance Arabic and Hebrew); set to true to mirror transitions |
| **class** | optional | String | | Slider CSS class appended to ".sliderClass" |
| **pageClass** | optional | String | | Page CSS class appended to ".page" |


#### Transition parameters

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **page** | required | Mithril Template or Component | | Page to move to |
| **duration** | optional | Number | 360 | Transition duration in ms |
| **done** | optional | Function | | Called at the end of a transition, after the route change; also called for the first page (when no route change is applied) |


#### Expert parameters

These are normally not needed.

| **Parameter** |  **Route or Transition** | **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | ------------------------ | ------------- | -------- | ----------- | --------------- |
| **route** | transition | optional | String | The result of `m.route()` | The destination route; by default provided with the link config |
| **direction** | transition | optional | Number: 1 or -1 | 1 | Transition direction, where -1 stands for backward (regardless the writing orientation) |
| **slider** | both | optional | String | 'default' | In case multiple sliders are used, sliders can be distinguished by adding this id |
| **id** | both | optional | String | The value of `route` | An id is used for each page state to distinguish pages and assign navigation depth; use only when `route` is not used |


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



### Styling

Page Slider comes with a JavaScript based styling that uses [j2c](https://github.com/pygy/j2c), but there is no hard dependency - you can provide your own styles in any other way, for instance with the CSS file `mithril-page-slider.css` (generated by npm script `standalone-css`).


#### j2c styling

The j2c way goes like this. In your application file:

    import styleFn from 'mithril-page-slider-style';
    import sliderStyle from 'mithril-page-slider-transition-style';
    const style = styleFn(sliderStyle, {});

`styleFn` returns a function that applies a transition style object. See the default style `mithril-page-slider-transition-style.es6.js`.

You may choose to omit either style for 'rtl' or 'ltr'. See the "effects" example for a custom transition effect.


The examples app dir contains a convenience function to add the styles to the document head:

    import styler from 'app/app/styler';
    styler.add('mithril-page-slider', style);


#### styleFn options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **pageSelector** | optional | String | '> .page' | Page selector |
| **vendors** | optional | Array | ['o', 'ms', 'moz', 'webkit'] | Vendor prefix attributes |




## Viewing the examples

* `cd examples/src`
* `npm install`

Start up a local server, for instance:

* `npm install -g http-server`

Then:

* `http-server .`


## Developing

The examples are currently set up in 2 ways (to keep things relatively flexible):

* `src` uses SystemJS - see the path configuration in examples/src/config.js
* `build` uses Browserify - see examples/src/scripts/build.js


For compiling/transpiling, you need to install the following:

~~~bash
npm install babel -g
~~~

### Scripts

Compile (transpile) everything:

~~~bash
npm run transpile
~~~

transpiles all es6 files to es5

While developing:

~~~bash
npm run watch
~~~

Watches changes to es6 files



## Size

Minified and gzipped: 1.6 Kb



## Dependencies

* [Mithril](https://www.npmjs.com/package/mithril)

Optional dependency:

* [j2c](https://github.com/pygy/j2c) - for creating js stylesheets


## Licence

MIT



## TODO

* Remember scroll position when going to the previous page
