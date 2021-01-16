import React from 'react';
import { AppBar,  Button,  Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
//css
import '../../App.css';

const style = {
    fontWeight:600,
    fontSize:15,
    color:'white'
}


 const Navbar:React.FC=()=>{
    return (
        <AppBar>
            <Toolbar>
                <Button style={style} component={Link} to='/'>Home</Button>
                <Button style={style} component={Link} to="/sign-up">Sign up</Button>
                <Button style={style} component={Link} to="/sign-in">Sign in</Button>
                <Button style={style} component={Link} to='my-account'>Account</Button>
            </Toolbar>
        </AppBar>
        
            
        
    )
};

export default Navbar;