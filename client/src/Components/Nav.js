import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout, verifyUser } from "../redux/auth";

import '../Styles/Nav.css'

class Nav extends Component {
    componentWillReceiveProps() {
        this.props.verifyUser();
    }

    render() {
        let { isAuthenticated } = this.props;
        return (
            <nav className="navbar">
                <div className="spiced">Spiced</div>
                <div className="recipes-buttons">
                    {isAuthenticated ? null : <div><Link className="nav-links" to="/signup">Sign Up</Link></div>}
                    {isAuthenticated ? null : <div><Link className="nav-links" to="/login">Log In</Link></div>}
                    {isAuthenticated ? <Link className="recipes-nav-btn make-menu" to="/buildmenu">MAKE MENU</Link> : null}
                    {isAuthenticated ? <button onClick={() => this.props.logout(this.props.history)}>LOGOUT</button> : null}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return state.user
}

export default withRouter(connect(mapStateToProps, { logout, verifyUser })(Nav));

