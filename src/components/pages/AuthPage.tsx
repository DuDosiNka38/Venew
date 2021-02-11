import React, {useState} from "react";
import {Paper, Tabs, Tab, Grid} from "@material-ui/core";
import Login from './Login';
import Register from './Register';

const renderLoginFrom = () => {
    return (
        <>
            <Login/>
        </>
    );
};

const renderRegisterForm = () => {
    return (
        <>
            <Register/>
        </>
    );
};

export const AuthPage: React.FC = () => {
    const [tab, setTab] = useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newTab: number) => {
        setTab(newTab);
    };

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{minHeight: "100vh", padding: "1rem"}}
        >
            <Grid item sm={8} md={6} lg={4} style={{width: "100%"}}>
                <Paper
                    square
                    style={{
                        position: "absolute",
                        width: "100%",
                        top: 0,
                        left: 0,
                        marginBottom: "2rem"
                    }}
                >
                    <Tabs
                        variant="fullWidth"
                        value={tab}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="login-signup page tabs"
                    >
                        <Tab label="Sign in"/>
                        <Tab label="Sign up"/>
                    </Tabs>
                </Paper>
                {tab === 0 ? renderLoginFrom() : renderRegisterForm()}
            </Grid>
        </Grid>
    );
};

export default AuthPage;