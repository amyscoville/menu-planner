import React, { Component } from 'react';

export default class IngredientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: {
                ingName: '',
                amount: '',
                unit: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        let {name, value} = e.target;
        if (name === 'unit') {
            this.setState((prevState) => {
                return {
                    ingredient: {
                        ...prevState,
                        unit: value
                    }
                }
            })
        } else {
            this.setState((prevState) => {
                return {
                    ingredient: {
                        ...prevState,
                        [name]: value
                    }
                }
            });
        }
    }

    handleClick() {
        let newIngr = this.state.ingredient;
        this.props.submit(newIngr);
    }

    render() {
        let {ingName, amount, unit} = this.state;
        return (
            <div>
                <input onChange={this.handleChange} type="text" name="ingName" value={ingName} placeholder="Ingredient name" /> 
                <input onChange={this.handleChange} type="number" name="amount" value={amount} placeholder="Amt."/>
                <select name="unit" value={unit} id="unit" onChange={this.handleChange}>
                    <option value="teaspoon(s)">teaspoon(s)</option>
                    <option value="tablespoon(s)">tablespoon(s)</option>
                    <option value="cup(s)">cup(s)</option>
                </select>
                <button onClick={this.handleClick}>Add Ingredient</button>
            </div>
        )
    }
}
