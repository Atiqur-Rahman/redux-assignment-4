import { combineReducers } from 'redux';
import bookReducer from './book/reducer';
import updateBookReducer from './manage-update/reducer';

const rootReducer = combineReducers({
    books: bookReducer,
    update: updateBookReducer,
});

export default rootReducer;
