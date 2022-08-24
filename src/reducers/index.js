import { combineReducers } from 'redux';
import weather from './weather-reducers';

export default combineReducers({
  weather,
});