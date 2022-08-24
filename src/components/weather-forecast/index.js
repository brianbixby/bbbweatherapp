import React from 'react';

export class WeatherForecast extends React.Component {
  formatDate = date => new Date(date).toDateString().split(' ').splice(1,2).join(' ');
  convertKtoF = k => parseInt(k*9/5 - 459.67);

  render(){
    let {weather} = this.props;
    return ( 
      <div className='weekForecast'>
        {weather.map((forecast, idx) =>
          <div key={idx} className='weekForecastItem'>
            <p className='date'>{this.formatDate(forecast[0])}</p>
            <p className='icon'><img src={`http://openweathermap.org/img/w/${forecast[1]}.png`} alt={forecast[4] || "weather icon"}/></p>
            <p className='max'>{this.convertKtoF(forecast[2])}</p>
            <p className='min'>{this.convertKtoF(forecast[3])}</p>
          </div>
        )}
      </div>
    );
  }
}
export default WeatherForecast;