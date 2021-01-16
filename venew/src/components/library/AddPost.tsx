import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from './Avatar';
import {  CardMedia, createMuiTheme, createStyles, FormControl, Input, InputAdornment, TextField } from '@material-ui/core';
import { Post } from '../../store/posts/types';
import { OutlinedInput } from '@material-ui/core';
import { service } from '../../config/firestore-db';

const useStyles = makeStyles((theme)=>createStyles({
  form:{
    display: 'flex',
    margin:theme.spacing(1)
  },

  card: {
    position: 'relative',
    marginBottom: 20,
    padding:'14px'
  },
  content:{
    display: 'flex',
  },
  buttons:{
    display:'flex', 
    justifyContent:'flex-end'
  }
  
}));


export default function AddPost()
{
  const [input, setInput] = useState<string>(); 
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.content}>
      <Avatar size={7} src={'https://i.dailymail.co.uk/i/pix/2015/01/07/2477609600000578-2899561-Multi_talented_IMG_praised_model_Gizele_Oliveira_for_her_ability-m-11_1420639554729.jpg'}/> 
          <FormControl fullWidth className={classes.form}>
          <OutlinedInput
                id="in"
                multiline
                value={input}
                onChange={(e)=>{
                  setInput(e.target.value)
                }}
              />
          </FormControl> 
      </div>
        <CardActions className={classes.buttons}>
        <Button 
          size="small" 
          color="primary" 
          variant="contained"
          disabled={!input}
          onClick={()=>{
            service.setPost(
              {
                body:input+'',
                commentCount:0,
                likeCount:0,
                id:Date.now(),
                timestamp:Date.now().toString(),
                userHandle:"User",
                usersLike:false,
                userImage:'https://i.dailymail.co.uk/i/pix/2015/01/07/2477609600000578-2899561-Multi_talented_IMG_praised_model_Gizele_Oliveira_for_her_ability-m-11_1420639554729.jpg'
            }
            ); setInput('')}}
        >
          Post
        </Button>
        <Button
          size="small" 
          color="primary"
          onClick={()=>{
            setInput('')
          }}
        >
          Clear
        </Button>
      </CardActions>
      
    </Card>
  );
}