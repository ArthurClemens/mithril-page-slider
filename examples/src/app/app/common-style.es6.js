import vars from './variables';

const styles = [{
    ' html, body': {
        'min-height': '100%',
        'height': '100%'
    },
    ' body': {
        'margin': 0,
        'padding': 0,
        'font-family': 'arial, sans-serif',
        'min-width': vars.size_px
    },
    ' a': {
        '&:link, &:visited': {
            'color': '#1E88E5',
            'text-decoration': 'none'
        }
    }
}];
export default styles;