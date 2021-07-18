import routes from 'config/route';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function ShowContent() {
    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
                ))
            }
        </Switch>
    )
}

export default ShowContent;