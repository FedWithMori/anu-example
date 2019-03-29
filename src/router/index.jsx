import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from 'components/home';
import Loadable from 'react-loadable';

// 首页
const Login = Loadable({
    loader: () => import('components/login'),
    loading() {
        return <div>加载中</div>;
    }
});

const RouterConfig = () => (
    <Router history={hashHistory} >
        <Route exact path="/" component={ Home }/>
        <Route path="/login" component={ Login }/>
    </Router>
);

export default RouterConfig;
