import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import PerformersPage from '../pages/PerformersPage';


const Router = () => (
    <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/performers" component={PerformersPage} />
        <Redirect to="/" component={LoginPage} />
    </Switch>
); 

export default Router;