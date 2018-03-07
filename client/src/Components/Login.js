import React, { Component } from 'react'
import {connect} from "react-redux";  
import {login} from "../redux/auth";

import '../Styles/Login.css'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                username: '',
                password: ''
            }
        }
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                username: '',
                password: ''
            }
        })
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit = (e) => {  
        e.preventDefault();
        this.props.login(this.state.inputs, this.props.history);
        this.clearInputs();
    }

    render() {
        let { username, password } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                    <input type="text" onChange={this.handleChange} name="username" value={username} placeholder="Username" />
                    <input type="text" onChange={this.handleChange} name="password" value={password} placeholder="Password" />
                    <button>submit</button>
            </form>
        )
    }
}

export default connect(null, {login})(LoginForm);