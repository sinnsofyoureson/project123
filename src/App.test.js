import React from 'react';
import renderer from 'react-test-renderer';

// components and containers testing
import App from './App';

describe('App component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    jestExpect(tree).toMatchSnapshot();
  });
});