import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store' //ES6 modules

// components and containers testing
import ObjectForm from '../ObjectForm';

// mock store
const middlewares = []
const mockStore = configureStore(middlewares)

describe('ObjectForm container', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const props = {
      objects: []
    }
  
    it('matches the snapshot', () => {
      const tree = renderer.create(
        <Provider store={store}>
          <ObjectForm {...props} />
        </Provider>
      ).toJSON();
      jestExpect(tree).toMatchSnapshot();
    })
});  