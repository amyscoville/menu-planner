import axios from 'axios';

const recipesUrl ='/recipes';

const recipesReducer = (recipes = [], action) => {
    switch (action.type) {
        case 'GET_RECIPES':
            return action.recipes;
        case 'ADD_RECIPE':
            return [...recipes, action.newRecipe];
        case 'UPDATE_RECIPE':
            let newRecipes = recipes;
            for(let i = 0; i < newRecipes.length; i++) {
                if(action.updatedRecipe._id === newRecipes[i]._id) {
                    newRecipes[i] = Object.assign(newRecipes[i], action.updatedRecipe);
                }
            }
            return newRecipes;
        default:
            return recipes;
    }
}

export function getRecipes() {
    return function(dispatch) {
        axios.get(recipesUrl)
            .then(response => {
                dispatch({
                    type: 'GET_RECIPES',
                    recipes: response.data
                });
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export function addRecipe(newRecipe) {
    return function(dispatch) {
        axios.post(recipesUrl, newRecipe)
            .then(response => {
                dispatch({
                    type: 'ADD_RECIPE',
                    newRecipe: response.data
                });
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export function updateRecipe(id, updatedRecipe) {
    return function (dispatch) {
        axios.put(recipesUrl + '/' + id, updatedRecipe)
            .then(response => {
                dispatch({
                    type: 'UPDATE_RECIPE',
                    updatedRecipe: response.data
                });
            })
            .catch(err => {
                console.error(err);
            })
    }

}

export default recipesReducer;