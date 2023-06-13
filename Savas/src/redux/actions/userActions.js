import * as actionTypes from "./actionTypes";

export function addUser(user) {
    return { type: actionTypes.ADD_USER, payload: user };
}

export function getAllUsers(user) {
    return { type: actionTypes.GET_USER, payload: user };
}