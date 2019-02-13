import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { expect } from 'chai';

// components and containers testing
import Client from '../Client';

describe('Client component', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(<Client />).toJSON();
      jestExpect(tree).toMatchSnapshot();
    });
    it('renders one list component', () => {
      const wrapper = shallow(<Client />);
      expect(wrapper.find('li')).to.have.lengthOf(1);
    });    
})