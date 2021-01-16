import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

type avatarProps={
    src?:string,
    size:number
}

export default function ImageAvatars({size,src}:avatarProps) {
const classes = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      justifyContent: 'center',
    },
    size:{
        width:theme.spacing(size),
        height: theme.spacing(size)
    },
  }),
)();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={src||"/static/images/avatar/1.jpg"} className={classes.size} />
    </div>
  );
}
