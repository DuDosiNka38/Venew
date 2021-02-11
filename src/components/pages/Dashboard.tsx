import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {authService} from '../../config/services-config';

const Dashboard: React.FC = () => {

    const handleLogout = () => {
        return authService.logout();
    };

    return (
        <Grid
            container
            spacing={5}
            direction='column'
            alignItems='center'
            justify='center'
            style={{minHeight: '100vh', padding: '2rem'}}
        >
            <Grid item sm={8} md={6} lg={4} style={{width: '100%', textAlign: 'center'}}>
                <Typography variant='h2' component='h2'>
                    Hello
                </Typography>
                <Button
                    color='secondary'
                    variant='text'
                    type='submit'
                    style={{marginTop: '2rem'}}
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Grid>
            <Typography variant='caption' component='p'>
                this is just a normal text to fill this blank area :)
            </Typography>
        </Grid>
    );
};

export default Dashboard;