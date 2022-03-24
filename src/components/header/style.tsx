import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/theme';

export default makeStyles({
    container: {
        height: '550px',
        backgroundImage: 'url(/image/movieBg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        background: 'black',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '257px',
        }
    },
    messageContainer: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        }
    },
    message: {
        width: '30%',
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '72px',
        lineHeight: '94px',
        letterSpacing: '-0.05em',
        color: '#FFFFFF',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            width: '40%',
            fontSize: '28px',
            lineHeight: '36px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
})