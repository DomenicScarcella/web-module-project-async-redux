import axios from 'axios';

export const FETCH_IT_START = 'FETCH_IT_START';
export const FETCH_IT_SUCCESS = 'FETCH_IT_SUCCESS';
export const FETCH_IT_FAILURE = 'FETCH_IT_FAILURE';

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_IT_START });
        axios
            .get('https://official-joke-api.appspot.com/random_ten')
            .then((res) => {
                console.log(res.data)
                dispatch({ type: FETCH_IT_SUCCESS, payload: res.data });
            })
            .catch((err) => {
                console.log(err.message);
                dispatch({ type: FETCH_IT_FAILURE, payload: err.message });
            });
    };
};