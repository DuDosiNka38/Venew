import React, {useState} from "react";
import {Box, Button, Link, TextField} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import {styles} from "./styles";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://venew.co.il/">
                Venew ltd
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export type LoginData = {
    username: string;
    password: string
}

type Props = {
    onSubmit: (loginData: LoginData) => Promise<boolean>;
} & WithStyles<typeof styles>

const LoginForm: React.FC<Props> = (props) => {
    const {onSubmit, classes} = props;
    const [loginData, setLoginData] = useState<LoginData>({username: '', password: ''});

    async function onSubmitForm(event: any) {
        event.preventDefault();
        return await onSubmit(loginData);
    }

    function handlerChange(event: any) {
        setLoginData({...loginData, [event.target.name]: event.target.value});
    }

    return (
        <main className={classes.container}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={onSubmitForm} className={classes.form}>

                    <FormControl margin='normal' fullWidth>
                        <TextField
                            name="username"
                            label="Email"
                            required
                            autoFocus
                            autoComplete='email'
                            color='secondary'
                            onChange={handlerChange}
                            value={loginData.username}
                        />
                    </FormControl>

                    <FormControl margin='normal' fullWidth>
                        <TextField name='password' label='Password' type='password'
                                   required
                                   autoComplete='current-password'
                                   inputProps={{minLength: 6}}
                                   color='secondary'
                                   onChange={handlerChange}
                                   value={loginData.password}
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>

                <p className={classes.forgotPassword}>
                    <Link>
                        Forgot Password
                    </Link>
                </p>
            </Paper>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </main>
    )
}

export default withStyles(styles, {withTheme: true})(LoginForm);
