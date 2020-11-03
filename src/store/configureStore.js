import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import launchesReducer from '../reducers/launches';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const constructStore = () => {
  const store = createStore(
    combineReducers({
      launches: launchesReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};

export default constructStore;
