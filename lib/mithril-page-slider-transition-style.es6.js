const data = {
    ltr: {
        default: {
            previous: {
                transform: 'translate3d(-100%, 0, 1px)'
            },
            current: {
                transform: 'translate3d(0, 0, 2px)'
            },
            next: {
                transform: 'translate3d(100%, 0, 3px)'
            }
        },
        forward: {
            previous: {
                transform: 'translate3d(-200%, 0, 1px)'
            },
            current: {
                transform: 'translate3d(-100%, 0, 2px)'
            },
            next: {
                transform: 'translate3d(0, 0, 3px)'
            }
        },
        backward: {
            previous: {
                transform: 'translate3d(0, 0, 1px)'
            },
            current: {
                transform: 'translate3d(100%, 0, 2px)'
            },
            next: {
                transform: 'translate3d(200%, 0, 3px)'
            }
        }
    },
    rtl: {
        default: {
            previous: {
                transform: 'translate3d(100%, 0, 1px)'
            },
            current: {
                transform: 'translate3d(0, 0, 2px)'
            },
            next: {
                transform: 'translate3d(-100%, 0, 3px)'
            }
        },
        forward: {
            previous: {
                transform: 'translate3d(200%, 0, 1px)'
            },
            current: {
                transform: 'translate3d(100%, 0, 2px)'
            },
            next: {
                transform: 'translate3d(0, 0, 3px)'
            }
        },
        backward: {
            previous: {
                transform: 'translate3d(0, 0, 1px)'
            },
            current: {
                transform: 'translate3d(-100%, 0, 2px)'
            },
            next: {
                transform: 'translate3d(-200%, 0, 3px)'
            }
        }
    }
};

export default data;