import React from 'react';
import renderer from 'react-test-renderer';

// components and containers testing
import SingleObject from '../SingleObject';

describe('SingleObject component', () => {
    it('matches the snapshot', () => {
      const props = {
        objects: []
      }
      const tree = renderer.create(<SingleObject {...props} />).toJSON();
      jestExpect(tree).toMatchSnapshot();
    })
});