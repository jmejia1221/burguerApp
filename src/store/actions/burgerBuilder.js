import axios from '../../axios-order';
import * as actionTypes from './actionTypes';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const setIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(reponse => {
                dispatch(setIngredients(reponse.data));
            })
            .catch(err => {
                dispatch(setIngredientsFailed());
            });
    };
};