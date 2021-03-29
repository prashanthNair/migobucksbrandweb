import { combineReducers } from 'redux';
import AuthReducer from '../pages/Auth/redux/auth.reducer';

export default combineReducers({
    auth: AuthReducer
});