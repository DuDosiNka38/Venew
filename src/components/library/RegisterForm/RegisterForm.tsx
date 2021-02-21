import React, {useCallback, useEffect, useState} from "react";
import {Box, Button, Link, TextField} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import {styles} from './styles';
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://venew.com/">
                Venew
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export type UserData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type Props = {
    onSubmit: (userData: UserData) => Promise<any>;
} & WithStyles<typeof styles>

const RegisterForm: React.FC<Props> = (props: Props) => {
    const {onSubmit, classes} = props;
    const [userData, setUserData] = useState<UserData>({
        username: '', email: '', password: '', confirmPassword: ''
    });
    const [pristine, setPristine] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);

    const handleChange = (event: any) => {
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    async function onSubmitForm(event: any) {
        event.preventDefault();
        setPristine(true);
        if (isValid) {
            return await onSubmit(userData);
        }
    }

    const validateConfirmPasswordFn = (): any => {
        const {password, confirmPassword} = userData;
        if (password !== confirmPassword) return 'password and confirm password fields do not match'
    }

    const validateConfirmPassword = useCallback(validateConfirmPasswordFn, [userData]);

    useEffect(() => {
        function validate(): boolean {
            return !validateConfirmPassword()
        }

        setIsValid(validate());
    }, [userData, validateConfirmPassword])

    return (
        <main className={classes.container}>
            <Paper className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                <form onSubmit={onSubmitForm} className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <TextField
                                    name="username"
                                    label="User name"
                                    required
                                    autoFocus
                                    color='secondary'
                                    onChange={handleChange}
                                    value={userData.username}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <TextField
                                    name="email"
                                    label="Email"
                                    required
                                    autoFocus
                                    color='secondary'
                                    onChange={handleChange}
                                    value={userData.email}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                            <TextField label='Password' name='password'
                                       type='password'
                                       required
                                       inputProps={{minLength: 6}}
                                       color='secondary'
                                       onChange={handleChange}
                                       value={userData.password}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField label='Confirm password' name='confirmPassword'
                                           type='password'
                                           required
                                           inputProps={{minLength: 6}}
                                           error={pristine && !!validateConfirmPassword()}
                                           helperText={validateConfirmPassword()}
                                           color='secondary'
                                           onChange={handleChange}
                                           value={userData.confirmPassword}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                    >
                        Sing up
                    </Button>
                </form>

                <p className={classes.haveAccount}>
                    <Link>
                        Already have an account? Sign in
                    </Link>
                </p>

            </Paper>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </main>
    );
}

export default withStyles(styles, {withTheme: true})(RegisterForm);