import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ajax from 'utils/fetch';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'mori',
            age: 18,
            sex: '男'
        }
    }
    componentDidMount() {
        this.setState({
            age: 10
        })
    }
    render() {
        const { name, age, sex } = this.state;
        return (
            <div>
                <h3>这是登录页</h3>
                <Link to="/">跳转回首页</Link>
            </div>
        )
    }
}

export default Login;
