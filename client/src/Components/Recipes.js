import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes, deleteRecipe } from '../redux/recipes';
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
    }
    componentDidMount() {
        this.props.getRecipes();
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    deleteRecipe = (id) => {
        this.props.deleteRecipe(id);
    }

    clickDelete = (id) => {
        confirmAlert({
            message: 'Are you sure you want to delete this recipe? \nThis action cannot be undone.',
            confirmLabel: 'Yes',
            cancelLabel: 'No',
            onConfirm: () => this.deleteRecipe(id)
        });
    }

    render() {
        let {recipes} = this.props;
        console.log(recipes);
        if (this.state.showModal) {
            return (
                <div>
                    <Modal toggle={this.toggleModal} />
                    <div className="recipes-wrapper">
                        <div className="recipes-nav-btn" onClick={this.toggleModal}>ADD RECIPE</div>
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
                <div className="recipes-nav-btn" onClick={this.toggleModal}>ADD RECIPE</div>
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
