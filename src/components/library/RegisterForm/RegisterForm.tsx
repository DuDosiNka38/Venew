import React, {useCallback, useEffect, useState} from "react";
import User from '../../../models/User';
import {getRandomNumber} from '../../../utils/random';
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

type Props = {
    users?: User[]
    user?: User;
    onSubmit: (user: User) => Promise<any>;
} & WithStyles<typeof styles>

const RegisterForm: React.FC<Props> = (props: Props) => {
    const {onSubmit, classes} = props;
    const [user, setUser] = useState<User>({
        id: NaN, username: '', email: '', password: '', confirmPassword: '', created: null
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);

    const handleChange = (event: any) => {
        const created: string = new Date().toISOString();
        const id: number = getRandomNumber(100000000, 999999999);
        setUser({
            ...user, created, id,
            [event.target.name]: event.target.value
        });
    }

    async function onSubmitForm(event: any) {
        event.preventDefault();
        setLoading(true);
        try {
            await onSubmit(user);
        } catch (error) {
            throw new Error(error.message);
        } finally {
            setLoading(false);
            setUser({id: NaN, username: '', email: '', password: '', confirmPassword: '', created: null});
        }
    }

    const validatePasswordFn = (): any => {
        const {password} = user;
        if (password.length < 6) return 'password can\'t be less than 6 symbols';
    }

    const validatePassword = useCallback(validatePasswordFn, [user]);

    const validateConfirmPasswordFn = (): any => {
        const {password, confirmPassword} = user;
        if (password !== confirmPassword) return 'password and confirm password fields do not match'
    }

    const validateConfirmPassword = useCallback(validateConfirmPasswordFn, [user]);

    useEffect(() => {
        function validate(): boolean {
            return !validatePassword()
                && !validateConfirmPassword()
        }

        setIsValid(validate());
    }, [user, validatePassword, validateConfirmPassword])

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
                                    error={!user.username}
                                    helperText={!user.username && 'username should be defined'}
                                    onChange={handleChange}
                                    value={user.username}
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
                                    error={!user.email}
                                    helperText={!user.email && 'email should be defined'}
                                    onChange={handleChange}
                                    value={user.email}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                            <TextField label='Password' name='password'
                                       type='password'
                                       required
                                       error={!!validatePassword()}
                                       helperText={validatePassword()}
                                       onChange={handleChange}
                                       value={user.password}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField label='Confirm password' name='confirmPassword'
                                           type='password'
                                           required
                                           error={!!validateConfirmPassword()}
                                           helperText={validateConfirmPassword()}
                                           onChange={handleChange}
                                           value={user.confirmPassword}
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
                        disabled={!isValid || loading}
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