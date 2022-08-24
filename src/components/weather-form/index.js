import React from 'react';
import searchIcon from '../../assets/search.svg';
import deleteIcon from '../../assets/delete.svg';
import searchIconHov from '../../assets/searchhov.svg';
import deleteIconHov from '../../assets/deletehov.svg';

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
    let search = this.state.searchHov ? searchIconHov: searchIcon;
    let del = this.state.deleteHov ? deleteIconHov: deleteIcon;
    return (
      <form onSubmit={this.handleSubmit} className='weatherForm'>
        <img src={search} alt="search icon" onClick={this.handleSubmit} className='searchIcon'
          onMouseOver={() => this.setState({searchHov: true })}
          onMouseOut={() => this.setState({searchHov: false })}
        />
        <input
          type='text'
          name='location'
          placeholder='city'
          value={this.state.location}
          onChange={this.handleChange}
        />

        <img src={del} alt="clear search term icon" className="deleteIcon" onClick={() => this.setState({location: ''})}
          onMouseOver={() => this.setState({deleteHov: true })}
          onMouseOut={() => this.setState({deleteHov: false })}
        />
        <button type='submit' className='hidden'></button>
      </form>
    );
  }
}

export default WeatherForm;