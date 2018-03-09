import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { verifyUser } from '../redux/auth';
import Recipes from './Recipes';
import IndvRecipe from './IndvRecipe';
import MenuMaker from './Menu/MenuMaker';
import SignUp from './SignUp'
import Login from './Login'
import Nav from './Nav'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }

    componentDidMount(){
        this.props.verifyUser();
    }

    render() {
        return(
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/recipes" component={Recipes} />
                    <Route path="/recipes/:id" component={IndvRecipe} />
                    <Route path='/buildmenu' component={MenuMaker} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/login' component={Login} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(null, { verifyUser })(App));

