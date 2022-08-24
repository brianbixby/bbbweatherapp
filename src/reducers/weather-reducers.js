const weather = (state = {}, action) => {
  let { type, payload } = action;

  switch (type) {
    case "WEATHER_FETCH":
      return payload;
    default:
      return state;
  }
};

export default weather;
