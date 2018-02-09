import React, { Component } from 'react';
import recipeDefault from '../images/recipe-default.png';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import '../Styles/Recipe.css';

class Recipe extends Component {
    render() {
        let { name, imgUrl, _id } = this.props.recipe;
        let imgStyle = {
            backgroundImage: `url(${imgUrl ? imgUrl : recipeDefault})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            height: `300px`,
            width: `300px`
        }
        return (
            <Link to={`/recipes/${_id}`} className="recipe-wrapper">
                <div style={imgStyle}></div>
                <h3>{name}</h3>
            </Link>
        )
    }
}

export default Recipe;


