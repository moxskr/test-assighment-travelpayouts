import {GET_HEADER_API, GET_SERVICES_API} from "../utils/actionTypes";

const init = {
    header : {
        balance : null,
        next_payout : null,
        currency : ''
    },
    services : []
};

export default (state = init, {type, payload}) => {
    switch (type) {
        case GET_HEADER_API :
            return {
                ...state,
                header : {
                    ...state.header,
                    balance : payload.balance,
                    next_payout : payload.next_payout,
                    currency : payload.currency
                }
            };
        case GET_SERVICES_API :
            return {
                ...state,
                services: payload
            };
        default: return state;
    }
}
