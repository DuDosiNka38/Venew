import React from 'react';
import {Grid} from '@material-ui/core';
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import ColorPanel from './ColorPanel'
import SidePanel from './SidePanel';
import Messages from './Messages';
import MetaPanel from './MetaPanel';

import {styles} from './styles';

type Props = WithStyles<typeof styles>

const Chat: React.FC<Props> = (props: Props) => {
    const {classes} = props

    return (
        <Grid className={classes.chat}>
            <ColorPanel/>
            <SidePanel/>
            <Grid className={classes.messages}>
                <Messages/>
            </Grid>
            <Grid className={classes.metaPanel}>
                <MetaPanel/>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles, {withTheme: true})(Chat);
