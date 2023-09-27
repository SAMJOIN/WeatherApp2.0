import weatherAPI from "../api/weather-api"

const SET_WEATHER = 'SET_WEATHER'
const GET_CITY = 'GET_CITY'
const SET_FETCHING = 'SET_FETCHING'

const initState = {
    weather: null,
    city: '',
    isFetching: false
}

const Reducer = (state = initState, action) => {
    switch (action.type) {

        case SET_WEATHER:
            return {
                ...state,
                weather: action.weather
            }

        case GET_CITY:
            return {
                ...state,
                city: action.city
            }
        
        case SET_FETCHING:
            return {
                ...state,
                fetching: action.fetching
            }

        default:
            return state
    }
}

export const setWeather = (weather) => {
    return {
        type: SET_WEATHER,
        weather
    }
}
export const getCity = (city) => {
    return {
        type: GET_CITY,
        city
    }
}
export const setFetching = (fetching) => {
    return {
        type: SET_FETCHING,
        fetching
    }
}

export const getWeather = (city) => (dispatch) => {
    dispatch(setFetching(true));
    return weatherAPI.getWeather(city)
        .then(response => {
            dispatch(setWeather(response));
            dispatch(setFetching(false));
        })
}

export default Reducer;
