import React from 'react';
import renderer from 'react-test-renderer';

// components and containers testing
import ObjectsList from '../ObjectsList';

describe('ObjectsList component', () => {
    it('matches the snapshot', () => {
      const props = {
        objects: []
      }
      const tree = renderer.create(<ObjectsList {...props} />).toJSON();
      jestExpect(tree).toMatchSnapshot();
    })
});