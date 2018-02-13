import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, updateRecipe } from '../redux/recipes';
import '../Styles/Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        let {name, directions, cookTime, imgUrl, ingredients} = this.props
        this.state = {
            recipe: {
                name: name || '',
                directions: directions || '',
                cookTime: cookTime || '',
                imgUrl: imgUrl || ''
            },
            ingredients: ingredients || [],
            ingredient: {
                ingName: '',
                amount: '',
                unit: '-'
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
                        unit: value
                    }
                }
            }); 
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
        let {ingName, amount, unit} = ingredient;
        if (ingName === '' || amount === '' || unit === '') {
            alert('Please complete all required fields before submitting ingredient');
        } else {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    ingredients: [...prevState.ingredients, ingredient],
                    ingredient: {
                        ingName: '',
                        amount: '',
                        unit: '-'
                    }
                }
            });
        }
    }

    deleteIngredient(index) {
        this.setState((prevState) => {
            return {
                ingredients: prevState.ingredients.filter((ingredient, i) => {
                    return i !== index;
                })
            }
        })
    }

    clearInputs() {
        this.setState({
            recipe: {
                name: '',
                directions: '',
                cookTime: '',
                imgUrl: ''
            },
            ingredients: []
        });
    }

    formSubmit(e) {
        e.preventDefault();
        let { name, directions } = this.state.recipe;
        let { ingredients } = this.state;
        let { _id} = this.props;
        if (name === '' || directions === '' || ingredients === []) {
            alert('One or more required fields are empty');
        } else {
            let recipe = { ...this.state.recipe, ingredients: this.state.ingredients }
            if (this.props.add) {
                this.props.addRecipe(recipe);
            } else {
                this.props.updateRecipe(_id, recipe);
            }
            this.props.toggle();
        }
    }

    render() {
        let { name, imgUrl, directions } = this.state.recipe;
        let { ingName, amount, unit } = this.state.ingredient;
        let { ingredients } = this.state;
        return (
            <form onSubmit={this.formSubmit} className="form-wrapper">
                <input className="recipe-name" onChange={this.handleChange} type="text" name="name" value={name} placeholder="Recipe Name*" />
                <div className="ing-form">
                    <div className="qty-unit">
                        <input className="qty" onChange={this.handleIngredientChange} type="number" name="amount" value={amount} placeholder="Qty*" />
                        <select name="unit" value={unit} id="unit" onChange={this.handleIngredientChange} placeholder="unit">
                            <option value="-">-</option>
                            <option value="teaspoon(s)">teaspoon(s)</option>
                            <option value="tablespoon(s)">tablespoon(s)</option>
                            <option value="cup(s)">cup(s)</option>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                            <option value="whole">whole</option>
                            <option value="cloves">clove(s)</option>
                            <option value="ounce(s)">ounce(s)</option>
                            <option value="pound(s)">pound(s)</option>
                            <option value="can(s)">can(s)</option>
                            <option value="jar">jar(s)</option>
                        </select>
                    </div>
                    <input onChange={this.handleIngredientChange} type="text" name="ingName" value={ingName} placeholder="Ingredient name*" />
                    <button className="add-ing"type="button" onClick={this.addIngredient}>Add</button>
                </div>
                <ul className="ing-list">
                    {ingredients.map((ingredient, index) => {
                        return <li key={index}>{`${ingredient.amount} ${ingredient.unit} ${ingredient.ingName}  `}<button type="button" onClick={() => { this.deleteIngredient(index) }}>X</button> </li>
                })}
                </ul>
                <textarea className="directions" onChange={this.handleChange} type="text" name="directions" value={directions} placeholder="Directions*" />
                <input className="img-url"onChange={this.handleChange} type="text" name="imgUrl" value={imgUrl} placeholder="Image URL (optional)" />
                <p className="required">*Required</p>
                <div className="form-buttons">
                    <button className="form-button submit" type="submit">submit</button> <button className="form-button" type="button" onClick={this.props.toggle}>cancel</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { addRecipe, updateRecipe })(Form);