import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../redux/recipes';
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

    render() {
        let { recipes } = this.props;
        if (this.state.showModal) {
            return (
                <div>
                    <Modal toggle={this.toggleModal} />
                    <div className="recipes-wrapper">
                        <nav className="recipe-nav"> <button className="recipe-nav-btn" onClick={this.toggleModal}>ADD RECIPE</button> <button className="recipe-nav-btn">MAKE MENU</button></nav>
                        {recipes.map((recipe, index) => {
                            return <Recipe key={index} recipe={recipe} />
                        })}
                    </div>
                </div>
            )
        }
        return (
            <div className="recipes-wrapper">
                <nav className="recipe-nav"> <button className="recipe-nav-btn" onClick={this.toggleModal}>ADD RECIPE</button> <button className="recipe-nav-btn">MAKE MENU</button></nav>
                {recipes.map((recipe, index) => {
                    return <Recipe key={index} recipe={recipe} />
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

export default connect(mapStateToProps, { getRecipes })(Recipes);
