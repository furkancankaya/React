import * as actionTypes from "./actionTypes";

export const increaseCounter = (number) => ({
    type: actionTypes.INCREASE_COUNTER,
    payload: number,
})

export const increaseCounterWithTwo = () => ({
    type: actionTypes.INCREASE_BY_TWO_COUNTER,
    payload: 2,
})

export const decreaseCounter = (number) => ({
    type: actionTypes.DECREASE_COUNTER,
    payload: number,
})

export const multiplyCounter = (number) => ({
    type: actionTypes.MULTIPLY_BY_INPUT,
    payload: number,
})
