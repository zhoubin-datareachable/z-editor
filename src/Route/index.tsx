import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Loading } from '@datareachable/dr_front_componentlibrary';

/* <------------------------------------ **** Lazy Loading all the pages START **** ------------------------------------ */

const EditPage = React.lazy(() => import(/* webpackChunkName: 'EditPage' */ '../Pages/Home'));

/* <------------------------------------ **** Lazy Loading all the pages END **** ------------------------------------ */

const RootRouter = (): JSX.Element => {
    return (
        <Suspense
            fallback={
                /* <------------------------------------ **** Loading Animation START **** ------------------------------------ */
                <Loading />
                /* <------------------------------------ **** Loading Animation END **** ------------------------------------ */
            }
        >
            <Router>
                <Switch>
                    <Route path="/" component={EditPage} />
                </Switch>
            </Router>
        </Suspense>
    );
};

export default RootRouter;
