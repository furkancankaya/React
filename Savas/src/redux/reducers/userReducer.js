import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case actionTypes.ADD_USER:
        var userIfExists = state.find((c) => c.id === action.payload.id);
        if (userIfExists) {
            return newState;
        }
        else{
            state.push(action.payload);
        }
    case actionTypes.GET_USER:
        return action.payload;
    
    default:
      return state;
  }
}