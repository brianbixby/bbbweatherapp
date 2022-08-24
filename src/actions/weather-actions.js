import superagent from 'superagent';

export const weatherFetch = city => ({
  type: 'WEATHER_FETCH',
  payload: city,
});

export const weatherFetchRequest = city => dispatch => {
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${process.env.REACT_APP_API_KEY}`;
  return superagent.get(url)
    .then(res => {
      let response = [];
      for(let i=0; i<=32; i+=8){
        if(i===0) {
          response.push([res.body.list[i].dt_txt, res.body.list[i].weather[0].icon, res.body.list[i].main.temp_max, res.body.list[i].main.temp_min, res.body.list[0].weather[0].description, res.body.list[0].main.humidity]);
        } else {
          response.push([res.body.list[i].dt_txt, res.body.list[i].weather[0].icon, res.body.list[i].main.temp_max, res.body.list[i].main.temp_min]);
        }
      }
      localStorage.weatherAppToken = JSON.stringify(response);
      localStorage.weatherAppCity = city;
      localStorage.timestamp = new Date().getTime() + 480000;
      dispatch(weatherFetch(response));
      return response;
    })
    .catch(err => {
      if(err.status === 404)
        return alert('404 Error: City not found please try again with a vaid city name. Ex. Seattle' );
      alert(`${err.status} Error: ${err.message}`);
    });
};