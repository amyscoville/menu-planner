import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../redux/recipes';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {
                name: '',
                ingredients: [],
                directions: '',
                cookTime: '',
                imgUrl: ''
            },
            ingredient: {
                ingName: '',
                amount: '',
                unit: 'teaspoon(s)'
            }
        }
        this.formSubmit = this.formSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleIngredientChange = this.handleIngredientChange.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                recipe: {
                    ...prevState.recipe,
                    [name]: value
                }
            }
        });
    }

    handleIngredientChange(e) {
        let { name, value } = e.target;
        if (name === 'unit') {
            this.setState(prevState => {
                return {
                    ingredient: {
                        ...prevState.ingredient,
                        'unit': value
                    }
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    ingredient: {
                        ...prevState.ingredient,
                        [name]: value
                    }
                }
            });
        }
    }

    addIngredient() {
        let { ingredient } = this.state;
        this.setState((prevState) => {
            return {
                recipe: {
                    ...prevState.recipe,
                    ingredients: [...prevState.recipe.ingredients, ingredient]
                },
                ingredient: {
                    ingName: '',
                    amount: '',
                    unit: 'teaspoon(s)'
                }
            }
        });
    }

    formSubmit(e) {
        e.preventDefault();
        this.props.addRecipe(this.state.recipe);
        this.setState({
            recipe: {
                name: '',
                ingredients: [],
                directions: '',
                cookTime: '',
                imgUrl: ''
            }
        });
    }

    render() {
        let { name, imgUrl, directions, cookTime, ingredients } = this.state.recipe;
        let { ingName, amount, unit } = ingredients;
        return (
            <form onSubmit={this.formSubmit}>
                <input onChange={this.handleChange} type="text" name="name" value={name} placeholder="Recipe Name" />
                <div>
                    <input onChange={this.handleIngredientChange} type="text" name="ingName" value={ingName} placeholder="Ingredient name" />
                    <input onChange={this.handleIngredientChange} type="number" name="amount" value={amount} placeholder="Amt." />
                    <select name="unit" value={unit} id="unit" onChange={this.handleIngredientChange}>
                        <option value="teaspoon(s)">teaspoon(s)</option>
                        <option value="tablespoon(s)">tablespoon(s)</option>
                        <option value="cup(s)">cup(s)</option>
                    </select>
                    <button onClick={this.addIngredient}>Add Ingredient</button>
                </div>
                {/* <ul> */}
                {/* {ingredients.map((ingredient, index) => {
                        return <li key={index}>{ingredient.amount}{ingredient.unit}{ingredient.ingName}</li>
                    })} */}
                {/* </ul> */}
                <input onChange={this.handleChange} type="text" name="directions" value={directions} placeholder="Directions" />
                <input onChange={this.handleChange} type="text" name="imgUrl" value={imgUrl} placeholder="Image URL" />
                <button type="submit">Add Recipe</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { addRecipe })(Form);