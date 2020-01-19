import {CANCEL_FILTER, CHANGE_FILTER} from "../utils/actionTypes";

export const changeFilter = text => ({
    type : CHANGE_FILTER,
    payload : text
});

export const cancelFilter = () => ({
    type : CANCEL_FILTER,
});


