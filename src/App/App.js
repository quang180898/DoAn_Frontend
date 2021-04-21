import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from '../store';
import { getPathList, LOGINS , MAIN} from '../routes';
import MainLogin from './MainLogin';
import MainPage from "./MainPage";
// import { TOKEN } from '../functions/Utils';
const TOKEN = false

const PrivateLoginRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <MainLogin />
    )} />
)
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        //check nếu chưa login thì ko được vào mainPage
        TOKEN
            ? <MainPage />
            : <Redirect to='/login' />
    )} />
)

const App = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Router>
                <Switch >
                    <Route exact path={getPathList(LOGINS)} >
                        <Route render={props => <PrivateLoginRoute {...props} />} />
                    </Route>
                    <Route exact path={getPathList(MAIN)} >
                        <Route render={props => <PrivateRoute {...props} />} />
                    </Route>
                    <Route render={props => <PrivateRoute {...props} />} />
                </Switch>
            </Router>
        </Provider>
    );
}


export default App;
