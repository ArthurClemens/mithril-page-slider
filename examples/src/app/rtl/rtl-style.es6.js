const styles = [
	{
		'.pageSlider.rtl': {
            ' .page': {
                'background': '#fff'
            },
            ' .card-page .content': {
                'background-color': '#1A237E',

                ' .card': {
                    'border': 'none'
                }
            },
            ' img.media-object.avatar': {
                'width': '100px',
                'height': '100px',
                'border-radius': '50px',
                'background-size': 'cover'
            },
            ' .github': {
                'width': 'auto'
            }
		}
	},
	// make a few corrections to Ratchet markup
	{
	    '.table-view': {
            'padding-right': 0
        },
        '.table-view-cell': {
            // reverse padding
            'padding': '11px 15px 11px 65px',

            ' >a:not(.btn)': {
                'margin': '-11px -15px -11px -65px'
            }
        }
	}
];

export default styles;

