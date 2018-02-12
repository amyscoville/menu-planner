import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getSingleRecipe } from '../redux/recipe';
import { deleteRecipe } from '../redux/recipes';
import { connect } from 'react-redux';
import Form from './Form';

import '../Styles/IndvRecipe.css';


class IndvRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        this.props.getSingleRecipe(id);
    }

    toggleEdit() {
        this.setState({
            editing: !this.state.editing
        })
    }

    render() {
        let { name, imgUrl, directions, ingredients } = this.props.recipe.data;
        let { loading } = this.props.recipe;
        let imgStyle = { backgroundImage: `url(${imgUrl})`, height: "300px", width: "300px", backgroundSize: "cover", backgroundPosition: "center" }
        if (this.state.editing) {
            return <Form toggle={this.toggleEdit}{...this.props.recipe.data} />
        }
        return (
            !loading ?
                <div>
                    <nav className="indv-recipe-nav"> <div className="spiced">Spiced</div> <div><Link to='/recipes' className="indv-recipe-nav-btn ">RECIPES</Link> <Link to="/buildmenu" className="indv-recipe-nav-btn indv-menu">MENU</Link></div></nav>
                    <div className="indv-recipe-wrapper">
                        <div className="img-btn-wrapper">
                            <div style={imgStyle}></div>
                            <button onClick={this.toggleEdit}>edit recipe</button>
                        </div>
                        <div className="indv-recipe-info">
                            <h1 className="recipe-name-h4">{name}</h1>
                            <h3>Ingredients:</h3>
                            <ul className="ing-ul">
                                {ingredients && ingredients.map((ingredient, index) => {
                                    return <li className="ing-li" key={index}>{`${ingredient.amount} ${ingredient.unit} ${ingredient.ingName}`}</li>
                                })}
                            </ul>
                            <h3 className="directions-header">Directions:</h3>
                            <p>{directions}</p>
                        </div>
                    </div>
                </div>
                :
                <div>LOADING</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipe: state.recipe,
    }
}

export default connect(mapStateToProps, { getSingleRecipe, deleteRecipe })(IndvRecipe);

