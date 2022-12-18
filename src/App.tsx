import React, {useEffect} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from '../src/components/pages/Dashboard';
import AuthPage from './components/pages/AuthPage';
import Loader from "./components/library/Loader";
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import Chat from "./components/Chat/Chat";
import {RootState} from "./redux/rootReducer";
import appFirebase from "./config/firebase-config";
import {clearUser, setUser} from "./redux/actions";

const App: React.FC = (props: any) => {

  const loading: boolean = useSelector((state: RootState) => state.user.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    appFirebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setUser(user));
        props.history.push('/');
      } else {
        dispatch(clearUser());
        props.history.push('/login');
      }
    })
  }, [])


  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#97b498'
      }
    }
  });

  return loading
      ? <Loader />
      : (
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/auth_page' component={AuthPage}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
              <Route path='/chat' component={Chat}/>
            </Switch>
          </ThemeProvider>
      )
};

export default withRouter(App);

