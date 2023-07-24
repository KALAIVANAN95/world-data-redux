const initialState = {
  countryData: null,
  weatherData: null,
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return {
        countryData: action.data,
        weatherData: action.payload,
      };
    case "REMOVE_COUNTRY":
      return {
        countryData: null,
        weatherData: null,
      };
    default:
      return state;
  }
};

export default countryReducer;
