import { combineReducers, createStore } from 'redux';
import contentReducer from './content-reducer'

const reducers = combineReducers({
    contentReducer,
});

const store = createStore(reducers);
window.store = store;
export default store;