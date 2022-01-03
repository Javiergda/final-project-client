import { types } from "../types/types";

// POSIBLES ESTADOS
// const state = {
//     email: 'javier@javier',
//     userTipe:1/2/3,
//     logged: true/false
// }

// POSIBLES ACCIONES
const loginAtction = {
    type: types.login,
    payload: {
        email: 'javier@javier',
        userTipe: 1 / 2 / 3

    }
}

export const auth = (state = {}, action) => {

    switch (action) {
        case types.login:
            return {
                ...action.payload,
                logged: true

            }

        case types.logout:
            return {
                ...action.payload,
                logged: false
            }

        default:
            return state;
    }

}