import {CANCEL_FILTER, CHANGE_FILTER} from "../utils/actionTypes";

const init = {
    filter : ''
};

export default (state = init, {type, payload}) => {
    switch(type) {
        case CHANGE_FILTER :
            return {
                ...state,
                filter : payload
            };
        case CANCEL_FILTER :
            return {
                ...state,
                filter: ''
            };
        default: return state;
    }
}
