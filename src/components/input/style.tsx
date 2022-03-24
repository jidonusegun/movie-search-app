import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    inputContainer: {
        position: 'relative',
        width: '100%'
    },
    searchTitle: {
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '24px',
        lineHeight: '31px',
        color: '#000000',
    },
    searchIcon: {
        position: 'absolute',
        right: '10px',
        top: '7px',
        cursor: 'pointer'
    },
})