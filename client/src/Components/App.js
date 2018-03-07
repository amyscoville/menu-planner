import React from 'react';
import Recipes from './Recipes';
import IndvRecipe from './IndvRecipe';
import { Switch, Route } from 'react-router-dom';
import MenuMaker from './Menu/MenuMaker';
import SignUp from './SignUp'
import Login from './Login'
import Nav from './Nav'

function App(props) {
    return (
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

export default App;

