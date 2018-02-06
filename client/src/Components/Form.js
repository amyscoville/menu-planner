import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../redux/recipes';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: '',
                ingredients: [{
                    name: '',
                    amount: '',
                    unit: ''
                }],
                directions: '',
                cookTime: '',
                imgUrl: ''
            }
        }
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    formSubmit(e) {
        e.preventDefault();
        this.props.addRecipe(this.state.inputs);
        this.setState({
            inputs: {
                name: '',
                ingredients: [{
                    ingName: '',
                    amount: '',
                    unit: ''
                }],
                directions: '',
                cookTime: '',
                imgUrl: ''
            }
        })
    }

    render() {
        let { name, imgUrl, directions, cookTime } = this.state.inputs;
        let { ingName, amount, unit } = this.state.inputs.ingredients;
        return (
            <form onSumbit={this.formSubmit}>
                <input onChange={this.handleChange} type="text" name="name" value={name} placeholder="Recipe Name" />
                <div>
                    <input onChange={this.handleChange} type="text" name="ingName" value={ingName} placeholder="Enter one ingredient at a time" /> 
                    <input type="text" name="amount" value={amount} placeholder="Amt."/>
                    <select name="unit" value={unit} id="unit">
                        <option value="teaspoon(s)">teaspoon(s)</option>
                        <option value="tablespoon(s)">tablespoon(s)</option>
                        <option value="cup(s)">cup(s)</option>
                    </select>
                </div>
                <input onChange={this.handleChange} type="text" name="directions" value={directions} placeholder="Directions" />
                <input onChange={this.handleChange} type="text" name="imgUrl" value={imgUrl} placeholder="Image URL" />
                <button>Add Recipe</button>
            </form>
        )
    }
}

export default Form;
