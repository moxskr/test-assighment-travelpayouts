import {fetchHeaderApi, fetchServicesApi} from "../utils/api";
import {GET_HEADER_API, GET_SERVICES_API} from "../utils/actionTypes";

export const getHeaderInfo = () => ({
    type : GET_HEADER_API,
    payload : fetchHeaderApi()
});

export const getServicesList = () => ({
    type : GET_SERVICES_API,
    payload :fetchServicesApi()
});
