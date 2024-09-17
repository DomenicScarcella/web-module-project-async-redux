import {
    FETCH_IT_SUCCESS,
    FETCH_IT_START,
    FETCH_IT_FAILURE, 
} from '../actions'

const initialState = {
    isLoading: false,
    data: [],
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IT_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_IT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''
            };
        case FETCH_IT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};