/*
Returns a function that applies a transition style object,
see the default style: mithril-page-slider-transition-style.es6.js.
Either style for 'rtl' and 'ltr' can be omitted.

Options:
- pageSelector (string); default '> .page'
- vendors (array); default ['o', 'ms', 'moz', 'webkit']
*/

const SELECTOR = '> .page';
const VENDORS = ['o', 'ms', 'moz', 'webkit'];

const styles = (data, opts = {}) => {
    const pageSelector = opts.pageSelector || SELECTOR;
    const sel = ' ' + pageSelector;
    const vendors = opts.vendors || VENDORS;
    const vendorsSel = vendors.map((v) => ('_' + v + '$')).join('');

    const vendorize = (o) => ({[vendorsSel]: o});

    const setPageCoords = (orientation, data) => {
        const cs = data[orientation].default;
        const styles = Object.keys(cs);
        return styles.map((s) => ({['.'+ s]: vendorize(cs[s])}));
    };

    const animation = (orientation, which, from, to, data) => {
        const name = [orientation, '-', 'animate', '-', to, '-', which].join('');
        const cs = data[orientation];
        return {
            ['@keyframes ' + name]: {
                '0%': cs[from][which],
                '100%': cs[to][which]
            },
            [sel]: {
                ['.' + which]: vendorize({
                    animation: name
                })
            }
        };
    };

    const pageSlider = {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',

        '.animating': {
            'pointer-events': 'none'
        },

        [sel]: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',

            '&': vendorize({
                'animation-duration': '300ms', // overwritten in component setting
                'animation-timing-function': 'ease-in-out'
            })
        }
    };
    const ltr = data.ltr ? {
        [sel]: [
            setPageCoords('ltr', data)
        ],
        '.forward.animating': [
            animation('ltr', 'previous', 'default', 'forward', data),
            animation('ltr', 'current', 'default', 'forward', data),
            animation('ltr', 'next', 'default', 'forward', data)
        ],
        '.backward.animating': [
            animation('ltr', 'previous', 'default', 'backward', data),
            animation('ltr', 'current', 'default', 'backward', data),
            animation('ltr', 'next', 'default', 'backward', data)
        ]
    } : {};
    const rtl = data.rtl ? {
        [sel]: [
            setPageCoords('rtl', data)
        ],
        '.forward.animating': [
            animation('rtl', 'previous', 'default', 'forward', data),
            animation('rtl', 'current', 'default', 'forward', data),
            animation('rtl', 'next', 'default', 'forward', data)
        ],
        '.backward.animating': [
            animation('rtl', 'previous', 'default', 'backward', data),
            animation('rtl', 'current', 'default', 'backward', data),
            animation('rtl', 'next', 'default', 'backward', data)
        ]
    } : {};

    return [{
		'.pageSlider': {
		    '&': pageSlider,
            '&, &.ltr': ltr,
            '&.rtl': rtl
		}
	}]
};

export default styles;
