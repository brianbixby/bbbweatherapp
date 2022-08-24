import React from 'react';
// import superagent from 'superagent';

// import { weatherFetchRequest } from '../../actions/weather-actions.js';

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      searchHov: false,
      deleteHov: false,
    };
  }

  handleChange = e => {
    let { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.location) {
      this.props.onComplete(this.state.location)
        .catch(err => console.log(err));
    }
  };


  render() {
    let { location, error } = this.state;
    let searchIcon = require('../../assets/search.svg');
    let deleteIcon = require('../../assets/delete.svg');
    let searchIconHov = require('../../assets/searchhov.svg');
    let deleteIconHov = require('../../assets/deletehov.svg');
    let search = this.state.searchHov ? searchIconHov: searchIcon;
    let del = this.state.deleteHov ? deleteIconHov: deleteIcon;
    return (
      <form onSubmit={this.handleSubmit} className='weatherForm'>
        <img src={search} onClick={this.handleSubmit} className='searchIcon'
          onMouseOver={() => this.setState({searchHov: true })}
          onMouseOut={() => this.setState({searchHov: false })}
        />
        {/* <i className="fa fa-search" onClick={this.handleSubmit}></i> */}
        <input
          type='text'
          name='location'
          placeholder='city'
          value={this.state.location}
          onChange={this.handleChange}
        />

        <img src={del} className="deleteIcon" onClick={() => this.setState({location: ''})}
          onMouseOver={() => this.setState({deleteHov: true })}
          onMouseOut={() => this.setState({deleteHov: false })}
        />
        {/* <i className="fa fa-times" onClick={() => this.setState({location: ''})}></i> */}
        <button type='submit' className='hidden'></button>
      </form>
    );
  }
}

export default WeatherForm;