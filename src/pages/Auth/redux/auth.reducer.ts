import { SUBMIT_LOGIN } from './auth.types';

const initialState = {
    loading: false
};

const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SUBMIT_LOGIN:
            console.log(action.payload);
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }

}

export default AuthReducer;