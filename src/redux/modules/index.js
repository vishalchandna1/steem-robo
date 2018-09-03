import { combineReducers } from 'redux';

import messages from './messages';
import home from './home';
import dashboard from './dashboard';
import account from './account';

export default combineReducers({
  account,
  home,
  dashboard,
  messages,
})
