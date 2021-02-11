import {Theme} from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles'

export const styles = (theme: Theme) => createStyles({
    container: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        marginTop: theme.spacing(4),
    },
    haveAccount: {
        fontSize: 12,
        borderColor: theme.palette.grey[300],
        borderTop: '1px solid',
        paddingTop: 10,
        width: '100%',
        textAlign: 'center'
    }
});
