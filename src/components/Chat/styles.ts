import {Theme} from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles'

export const styles = (theme: Theme) => createStyles({
    chat: {
        background: '#eee'
    },
    messages: {
        marginLeft: 320,
    },
    metaPanel: {
        width: 4
    }
})