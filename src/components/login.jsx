import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'mori'
        };
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <h3>{ name }，这是登录页</h3>
                <Link to="/">跳转回首页</Link>
            </div>
        );
    }
}

export default Login;
