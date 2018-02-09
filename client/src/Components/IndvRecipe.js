import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getSingleRecipe } from '../redux/recipe';
import { connect } from 'react-redux';
import Form from './Form';


class IndvRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({
            editing: !this.state.editing
        })
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        console.log('id=', id);
        this.props.getSingleRecipe(id);
    }

    render() {
        let { name, imgUrl, directions, ingredients } = this.props.recipe.data;
        let { loading } = this.props.recipe;
        let imgStyle = { backgroundImage: `url(${imgUrl})`, height: "400px", width: "400px", backgroundSize: "cover", backgroundPosition: "center" }
        if (this.state.editing) {
            return <Form toggle={this.toggleEdit}{...this.props.recipe.data} />
        }
        return (
            !loading ?
                <div>
                    <nav> <Link to='/recipes'>back to recipes</Link> </nav>
                    <div style={imgStyle}></div>
                    <h1>{name}</h1>
                    <ul>
                        {ingredients && ingredients.map((ingredient, index) => {
                            return <li key={index}>{`${ingredient.amount} ${ingredient.unit} ${ingredient.ingName}`}</li>
                        })}
                    </ul>
                    <p>{directions}</p>
                    <button onClick={this.toggleEdit}>edit recipe</button>
                </div>
                :
                <div>LOADING</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipe: state.recipe
    }
}

export default connect(mapStateToProps, { getSingleRecipe })(IndvRecipe);

