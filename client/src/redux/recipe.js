import axios from 'axios';

const recipesUrl = '/recipes';

const recipeReducer = (recipe = { data: {}, loading: true }, action) => {
    switch (action.type) {
        case 'GET_SINGLE_RECIPE':
            return {
                data: action.recipe,
                loading: false
            }
        default:
            return recipe;
    }
}

export function getSingleRecipe(id) {
    return function (dispatch) {
        axios.get(recipesUrl + '/' + id)
            .then(response => {
                dispatch({
                    type: 'GET_SINGLE_RECIPE',
                    recipe: response.data
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export default recipeReducer;