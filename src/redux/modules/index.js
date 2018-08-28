import { combineReducers } from 'redux';

import list from './list';
import home from './home';

export default combineReducers({
  list,
  home
})
