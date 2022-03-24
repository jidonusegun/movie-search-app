import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/theme';

export default makeStyles({
    container: {
        background: '#292929',
        height: '140px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            height: '67px',
        }
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        }
    },
    logo: {
        border: '1px solid #FFFFFF',
        padding: '.5rem .5rem',
        color: 'white'
    }
})