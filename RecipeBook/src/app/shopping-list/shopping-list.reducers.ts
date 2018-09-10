import { Action } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';

export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

const initialState = {
    ingredients: [
        new Ingredient('Apple',4),
        new Ingredient('Tomatoes',10),
    ]
}

export function shoppingListReducer(state = initialState, action:Action){
    switch(action.type){
        case ADD_INGREDIENTS:
            return{
                ...state,
                ingredients: [...state.ingredients, action]
            }

    }
    return state;
}