import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';

export default () => {
    return (
        <div>
            <Route exact path="/" component={App} />
        </div>
    );
};
