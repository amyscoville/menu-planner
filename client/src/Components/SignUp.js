import React, { Component } from 'react';
import { connect } from "react-redux";
import { signup } from "../redux/auth";

import '../Styles/SignUp.css';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                // name: '',
                // email: '',
                username: '',
                password: ''
            }
        }
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                // name: '',
                // email: '',
                username: '',
                password: ''
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state.inputs);
        this.clearInputs();
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

    render() {
        let { username, password } = this.state.inputs;
        return (
            <div className="signup-wrapper">
                <form onSubmit={this.handleSubmit}>
                    {/* <input type="text" onChange={this.handleChange} name="name" value={} placeholder="Name"/> */}
                    {/* <input type="text" onChange={this.handleChange} name="" value={} placeholder="Email"/> */}
                    <input type="text" onChange={this.handleChange} name="username" value={username} placeholder="Username" />
                    <input type="text" onChange={this.handleChange} name="password" value={password} placeholder="Password" />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { signup })(SignUpForm);
