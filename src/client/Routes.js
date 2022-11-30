import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import UsersList from './components/UsersList';

export default () => {
    return (
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/users" component={UsersList} />
        </div>
    );
};
