import React from 'react';
import Form from './Form';
import Recipes from './Recipes';
import Recipe from './Recipe';
import IndvRecipe from './IndvRecipe';
import { Switch, Route } from 'react-router-dom';
import Modal from './Modal';
import MenuMaker from './MenuMaker';

function App(props) {
    return (
        <div>
            <MenuMaker />
            {/* <Switch>
                <Route exact path="/recipes" component={Recipes} />
                <Route path="/recipes/:id" component={IndvRecipe} />
            </Switch> */}
        </div>
    )
}

export default App;

