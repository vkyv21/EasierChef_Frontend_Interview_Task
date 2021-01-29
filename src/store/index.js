import { createStore } from 'redux';
import recipeReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(recipeReducer, composeWithDevTools());

