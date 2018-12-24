import * as React from 'react';
import * as Loadable from 'react-loadable';
import { Route } from 'react-router-dom';

import { Loading } from './components/loading';
import { Index } from './pages/index'

const LoadableAbout = Loadable({
    loader: () => import("./pages/about"),
    modules: ['./pages/about'],
    webpack: () => [require.resolveWeak("./pages/about")],
    loading: Loading,
    delay: 300
});

export const Routes = function () {
    return (
        <div>
            <Route exact path="/" component={Index} />
            <Route exact path="/about" component={LoadableAbout} />
        </div>
    )
};
