import React, { Component } from 'react';
import recipeDefault from '../images/recipe-default.png';
import { Link } from "react-router-dom";
import '../Styles/Recipe.css';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSelect: false,
            weekday: ''
        }
    }

    toggleSelect = () => {
        this.setState({
            showSelect: !this.state.showSelect
        })
    }

    handleChange = (e) => {
        this.setState({weekday: e.target.value})
    }

    addToMenu = (id) => {
        this.props.addToMenu(this.state.weekday, id)
        this.toggleSelect();
    }

    render() {
        let { name, imgUrl, _id } = this.props.recipe;
        let imgStyle = {
            backgroundImage: `url(${imgUrl ? imgUrl : recipeDefault})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            height: `200px`,
            width: `200px`
        }
        let { deleteRecipe } = this.props;
        let { showSelect, weekday } = this.state;
        return (
            deleteRecipe ?
                <div className="recipe-wrapper">
                    <Link to={`/recipes/${_id}`} >
                        <div style={imgStyle}></div>
                        <h4>{name}</h4>
                    </Link>
                    <button onClick={() => { deleteRecipe(_id) }}>delete recipe</button>
                </div>
                :
                <div className="recipe-wrapper">
                    <Link to={`/recipes/${_id}`} >
                        <div style={imgStyle}></div>
                        <h4>{name}</h4>
                    </Link>
                    <button style={{ display: (showSelect ? 'none' : 'block'), margin: 'auto' }} onClick={this.toggleSelect}>add to menu</button>
                    <div style={{ display: (showSelect ? 'block' : 'none') }}>
                        <select value={weekday} onChange={this.handleChange}>
                            <option value="choose-day">choose day</option>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>
                        </select>
                        <button onClick={() => {this.addToMenu(_id)}}>add</button> 
                        <button onClick={this.toggleSelect}>cancel</button>
                    </div>
                </div>
        )
    }
}

export default Recipe;