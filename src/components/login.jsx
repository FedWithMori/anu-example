import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import ajax from 'utils/fetch';

class Login extends Component {
    constructor(props){
        super(props);
        console.log('0')
        this.state = {
            name: 'mori',
            age: 18,
            sex: '男'
        }
    }
    componentDidMount() {
        console.log(111)
        this.setState({
            age: 10
        })
    }
    componentWillMount() {
        console.log('000')
        this.setState({
            age: 10
        })
    }
    render() {
        const { name, age, sex } = this.state;
        return (
            <div>
                1111
            </div>
        )
    }
}

export default Login;
