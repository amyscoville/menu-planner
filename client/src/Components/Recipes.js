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
            title: 'Confirm to submit',
            message: 'Are you sure you want to delete this recipe?',
            confirmLabel: 'Yes',
            cancelLabel: 'Cancel',
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
                        <nav className="recipe-nav"> <button className="recipe-nav-btn" onClick={this.toggleModal}>ADD RECIPE</button> <Link to="/buildmenu"><button className="recipe-nav-btn">MAKE MENU</button></Link></nav>
                        {recipes.map((recipe, index) => {
                            return <Recipe key={index} recipe={recipe} deleteRecipe={this.deleteRecipe} />
                        })}
                    </div>
                </div>
            )
        }
        return (
            <div className="recipes-wrapper">
                <nav className="recipe-nav"> <button className="recipe-nav-btn" onClick={this.toggleModal}>ADD RECIPE</button> <Link to="/buildmenu"><button className="recipe-nav-btn">MENU</button></Link></nav>
                {recipes.map((recipe, index) => {
                    return <Recipe key={index} recipe={recipe} deleteRecipe={() => {this.clickDelete(recipe._id)}}/>
                })}
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
