const data = {
    ltr: {
        default: {
            previous: [{
                transform: 'translate3d(-100%, 0, 1px)'
            }, {
                'transform-origin': 'left',
                transform: 'scale(.9)',
                opacity: .5
            }],
            current: {
                transform: 'translate3d(0, 0, 2px)',
                opacity: 1
            },
            next: {
                transform: 'translate3d(100%, 0, 3px)'
            }
        },
        forward: {
            previous: {
                transform: 'translate3d(-200%, 0, 1px)'
            },
            current: [{
                transform: 'translate3d(-100%, 0, 2px)'
            }, {
                'transform-origin': 'left',
                transform: 'scale(.9)',
                opacity: .5
            }],
            next: {
                transform: 'translate3d(0, 0, 3px)',
                opacity: 1
            }
        },
        backward: {
            previous: {
                transform: 'translate3d(0, 0, 1px)',
                opacity: 1
            },
            current: {
                transform: 'translate3d(100%, 0, 2px)'
            },
            next: {
                transform: 'translate3d(200%, 0, 3px)'
            }
        }
    }
};

export default data;