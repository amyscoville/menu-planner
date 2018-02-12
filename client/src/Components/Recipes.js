import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes, deleteRecipe } from '../redux/recipes';
import {Link} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Recipe from './Recipe.js';
import Modal from './Modal';

import '../Styles/Recipes.css';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.clickDelete = this.clickDelete.bind(this);
    }
    componentDidMount() {
        this.props.getRecipes();
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    deleteRecipe(id) {
        this.props.deleteRecipe(id);
    }

    clickDelete(id) {
        confirmAlert({
            message: 'Are you sure you want to delete this recipe? \nThis action cannot be undone.',
            confirmLabel: 'Yes',
            cancelLabel: 'No',
            onConfirm: () => this.deleteRecipe(id)
        });
    }

    render() {
        let {recipes} = this.props;
        if (this.state.showModal) {
            return (
                <div>
                    <Modal toggle={this.toggleModal} />
                    <div className="recipes-wrapper">
                        <nav className="recipes-nav"> <div className="spiced">Spiced</div><div className="recipes-buttons"><div className="recipes-nav-btn" onClick={this.toggleModal}>ADD RECIPE</div> <Link className="recipes-nav-btn make-menu"to="/buildmenu">MAKE MENU</Link></div></nav>
                        <div className="recipe-display-wrapper">
                            {recipes.map((recipe, index) => {
                                return <Recipe key={index} recipe={recipe} deleteRecipe={this.clickDelete} />
                            })}
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="recipes-wrapper">
            <nav className="recipes-nav"> <div className="spiced">Spiced</div><div className="recipes-buttons"><div className="recipes-nav-btn" onClick={this.toggleModal}>ADD RECIPE</div> <Link className="recipes-nav-btn make-menu"to="/buildmenu">MAKE MENU</Link></div></nav>
            <div className="recipe-display-wrapper">
                    {recipes.map((recipe, index) => {
                        return <Recipe key={index} recipe={recipe} deleteRecipe={this.clickDelete} />
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { getRecipes, deleteRecipe })(Recipes);
