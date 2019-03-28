import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from 'components/home';
// import Login from 'components/login';
// import Loadable from 'react-loadable';

// 首页
// const Home = Loadable({
//     loader: () => import(  webpackChunkName: "home"  'components/home'),
//     loading() {
//         return <div>加载中</div>;
//     }
// })
const rootRoute = {
    childRoutes: [
        {
            path: '/',
            component: Home,
            childRoutes: [
                {
                    path: '/login',
                    getComponent(nextState, cb) {
                        require.ensure([], require => {
                            cb(null, require('components/login'));
                        }, 'login')
                    }
                }
            ]
        }
    ]
}
// const Login = () => require.ensure([], (require) => {
//     require('components/login')
// }, 'login');

const RouterConfig = () => (
    <Router
        history={hashHistory}
        routes={rootRoute} />
);

export default RouterConfig;