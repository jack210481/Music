/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react'
import { Provider } from 'react-redux'
import Friend from './src/pages/friend'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from './src/reducers';
import './src/mock/testData'

const createStoreWithMiddleware = applyMiddleware(thunk, promiseMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

const App = () => {
  return (
      <Provider store={store} >
          <Friend/>
      </Provider>
  );
};

export default App;
