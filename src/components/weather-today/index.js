import React from 'react';

export class WeatherToday extends React.Component {
  
  tempToArray = num => num.toString().split('');

  render(){
    let {weather} = this.props;
    let farenheit = parseInt(weather[2]*9/5 - 459.67);
    let temp = this.tempToArray(farenheit);
    let desc = weather[4].indexOf('sky') > -1 ? weather[4].replace('sky', 'skies') : weather[4];
    let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    return ( 
      <div className={isFirefox ? 'ff-todaysForecast todaysForecast' : 'todaysForecast'}>
        <div className='temp'>
          {temp.map((tempInt, idx) =>
            <p key={idx} className='tempP'>
              <span className='tempInt'> {tempInt}</span>
            </p>
          )}
          <p className='degree'>°</p>
        </div>
        <div className='todaysDesc'>
          <p className='f'>F</p>
          <p className='description'>{desc}</p>
          <p className='humidity'>{weather[5]}% Humidity</p>
        </div>
      </div>
    );
  }
}

export default WeatherToday;