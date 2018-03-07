import React, { Component } from 'react';
import {Link} from "react-router-dom";  
import {connect} from "react-redux";  
import {logout} from "../redux/auth";

class Nav extends Component {
    render() {
        console.log("navbar props",this.props)
        return (
            <nav className="recipes-nav">
                <div className="spiced">Spiced</div>
                <div className="recipes-buttons">
                <div className="recipes-nav-btn" onClick={this.toggleModal}>ADD RECIPE</div> 
                <Link className="recipes-nav-btn make-menu"to="/buildmenu">MAKE MENU</Link></div>
                {this.props.user.isAuthenticated ? <button onClick={() => this.props.logout(this.props.history)}>LOGOUT</button> : null}
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {logout})(Nav);