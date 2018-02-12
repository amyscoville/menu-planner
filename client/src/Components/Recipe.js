import React, { Component } from 'react';
import recipeDefault from '../images/recipe-default.png';
import { Link } from "react-router-dom";
import trashIcon from './trash-icon.png';
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
                    <Link className="recipe-link" to={`/recipes/${_id}`} >
                        <div style={imgStyle}></div>
                        <h4 className="recipe-name">{name}</h4>
                    </Link>
                    <div className="delete" onClick={() => { deleteRecipe(_id)}}><img className="trash"src={trashIcon} alt="delete"/></div>
                </div>
                :
                <div className="recipe-wrapper">
                    <Link className="recipe-link" to={`/recipes/${_id}`} >
                        <div style={imgStyle}></div>
                        <h4 className="recipe-name">{name}</h4>
                    </Link>
                    <button className="add-to-menu" style={{ display: (showSelect ? 'none' : 'block'), margin: '10px auto' }} onClick={this.toggleSelect}>add to menu</button>
                    <div className="add-form" style={{ display: (showSelect ? 'block' : 'none') }}>
                        <select className="choose" value={weekday} onChange={this.handleChange}>
                            <option value="choose-day">choose day</option>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>
                        </select>
                        <button className="add-confirm" onClick={() => {this.addToMenu(_id)}}>add</button> 
                        <button className="add-cancel" onClick={this.toggleSelect}>cancel</button>
                    </div>
                </div>
        )
    }
}

export default Recipe;