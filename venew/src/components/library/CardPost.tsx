import React from 'react';
import clsx from 'clsx';
//material-ui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
//icons
import CloseIcon from '@material-ui/icons/Close';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//service
import { service } from '../../config/firestore-db';
//types
import { Post } from '../../store/posts/types';
import dayjs from 'dayjs';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        textAlign: 'justify',
        marginBottom:'20px'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    flexEnd: {
        justifyContent:'flex-end',
    }
    
  }),
);

export default function CardPost(post: Post) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState<boolean>(!post.usersLike);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDeletePost = () =>{
      service.deletePost(post.id)
  }

  const handleLikeClick = () => {
      if(liked) {
          service.updatePost(post.id, {
              ...post,
              likeCount:post.likeCount+1,
              usersLike:true

            })
            setLiked(!liked);
      }else{
        service.updatePost(post.id, {
            ...post,
            likeCount:post.likeCount-1,
            usersLike:false

          })
          setLiked(!liked);
      }
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src='https://i.dailymail.co.uk/i/pix/2015/01/07/2477609600000578-2899561-Multi_talented_IMG_praised_model_Gizele_Oliveira_for_her_ability-m-11_1420639554729.jpg'>
            {post.userHandle}
          </Avatar>
        }

        action={
            <IconButton aria-label="settings">
                 <CloseIcon onClick={handleDeletePost}/>
          </IconButton>
        }
        
        title={post.userHandle}
        subheader={new Date(+post.timestamp).toDateString()}
      />
      
      <CardContent>
        <Typography paragraph>
          {post.body}
        </Typography>
      </CardContent>
      <CardActions className={classes.flexEnd}>
        <IconButton 
            aria-label="like" 
            color={liked?'default':'secondary'}
            onClick={handleLikeClick}
        >
          <FavoriteIcon/>
          &nbsp;{post.likeCount}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color="textSecondary">comments: {post.commentCount}</Typography>
          <Typography paragraph color="textSecondary">{'//TODO COMMENTS'}</Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}



