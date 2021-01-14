import { combineReducers } from 'redux';

import authorization from './authorization';
import tools from './tools';
import users from './users';

export default combineReducers({
  authorization,
  tools,
  users,
});
