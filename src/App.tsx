import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from '../src/components/pages/Dashboard';
import AuthPage from './components/pages/AuthPage';
import User from "./models/User";
import usePollerRedux from "./utils/poller-redux";
import {authService, usersService} from "./config/services-config";
import {SET_USER_DATA, SET_USERS} from "./redux/actions";
import {USER_DATA_POLLER_INTERVAL, USERS_POLLER_INTERVAL} from "./config/constants";
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import {UserData} from "./services/AuthService";
import {useSelector} from "react-redux";
import {ReducersType} from "./redux/store";

const App: React.FC = (props: any) => {
  usePollerRedux<User[]>(usersService, usersService.getAllUsers, SET_USERS, USERS_POLLER_INTERVAL);
  usePollerRedux<UserData>(authService, authService.getUserData, SET_USER_DATA, USER_DATA_POLLER_INTERVAL);

  const userData: UserData = useSelector((state: ReducersType) => state.userData);
  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#97b498'
      }
    }
  });

  return <ThemeProvider theme={theme}>
    <HashRouter>
      {userData.username ? <Redirect to='/' /> : <Redirect to='/auth_page'/>}
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/auth_page' component={AuthPage} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </HashRouter>
  </ThemeProvider>
};

export default App;

