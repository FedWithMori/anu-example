import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ajax from 'utils/fetch';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'mori',
            age: 18,
            sex: '男'
        }
    }
    componentDidMount() {
        // ajax({
        //     url: '/api'
        // });
        this.setState({
            age: 10
        })
    }
    render() {
        const { name, age, sex } = this.state;
        return (
            <div>
                {this.props.children}
                <div>hello</div>
                <div className="name">我叫{name}</div>
                <div className="age">我今年{age}岁</div>
                <div className="sex">我的性别是{sex}</div>
                <Link to="/login">跳转登录页</Link>
            </div>
        )
    }
}
