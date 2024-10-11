import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  // Add reducers as needed
});

const store = createStore(rootReducer);

export default store;