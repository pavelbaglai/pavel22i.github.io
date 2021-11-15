import { createStore, combineReducers } from 'redux';
import { BooksReducer } from './page-reducer';



let reducers = combineReducers({
    books: BooksReducer
})

let store = createStore(reducers)
export default store
window.store = store
