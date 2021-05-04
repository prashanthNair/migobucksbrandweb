import { SUBMIT_LOGIN } from './auth.types';

export const submitLogin = (payload: any) => ({
    type: SUBMIT_LOGIN,
    payload
})