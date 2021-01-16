import { Grid } from '@material-ui/core';
import * as React from 'react';
import UserInfo from '../library/UserInfo';
//redux
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
//components
import Loader from '../library/Loader';
import CardPost from '../library/CardPost';

//appl store stuff
import { Post } from '../../store/posts/types';
import { RootState } from '../../store/rootReducer';
import {getPosts} from '../../store/posts/actions'
//firebase
import AddPost from '../library/AddPost';
import {service} from '../../config/firestore-db';

const Account:React.FC = (props)=>{
    const posts:Post[] = useSelector((state:RootState)=>state.posts.posts)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        let subscription = service.getPosts().subscribe(
            data=>{
                dispatch(getPosts(data))
            }
            )
            return ()=>{
                subscription.unsubscribe()
            }
        },[service,service.getPosts]);
    return(
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <UserInfo/>
            </Grid>
            <Grid item xs={12} sm={8}>
                <AddPost/>
               {posts.length===0?<Loader/>: posts.map((p,i)=><CardPost key={i} {...p}/>)}  
            </Grid>
        </Grid>
    )
}

export default Account;