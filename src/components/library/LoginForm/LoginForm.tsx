import React, {useEffect, useState} from "react";
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
    passwordErrorMessage?: (password: string) => string
} & WithStyles<typeof styles>

const LoginForm: React.FC<Props> = (props) => {
    const {onSubmit, passwordErrorMessage, classes} = props;
    const [loginData, setLoginData] = useState<LoginData>({username: '', password: ''});
    const [loading, setLoading] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);

    async function onSubmitForm(event: any) {
        event.preventDefault();
        setLoading(true);
        try {
            await onSubmit(loginData);
        } catch (error) {
            throw new Error(error.message);
        } finally {
            setLoading(false);
            setLoginData({username: '', password: ''});
        }
    }

    function handlerChange(event: any) {
        setLoginData({...loginData, [event.target.name]: event.target.value});
    }

    useEffect(() => {
        function validate(): boolean {
            return !!loginData.username && (!passwordErrorMessage || !passwordErrorMessage(loginData.password));
        }

        setIsValid(validate());
    }, [loginData, passwordErrorMessage])
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
                            error={!loginData.username}
                            helperText={!loginData.username && 'email should be defined'}
                            onChange={handlerChange}
                            value={loginData.username}
                        />
                    </FormControl>

                    <FormControl margin='normal' fullWidth>
                        <TextField name='password' label='Password' type='password'
                                   required
                                   autoComplete='current-password'
                                   error={!(!passwordErrorMessage || !passwordErrorMessage(loginData.password))}
                                   helperText={!!passwordErrorMessage && passwordErrorMessage(loginData.password)}
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
                        disabled={!isValid || loading}
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
