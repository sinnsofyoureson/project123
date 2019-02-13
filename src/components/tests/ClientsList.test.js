import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { expect } from 'chai';

// components and containers testing
import Client from '../Client';
import ClientsList from '../ClientsList';

describe('ClientsList component', () => {
    let props = {
      clients: [
        {
          id: '01',
          name: 'Ринат',
          middlename: 'Юрьевич',
          surname: 'Москвин',
          phone: '+7-900-311-21-14',
          email: 'test@test.com',
          city: 'Энгельс',
          info: '',
          objects: 'object 1',
          active: true,
          shown: false
        },
        {
          id: '02',
          name: 'Tom',
          middlename: '',
          surname: 'Major',
          phone: '(202) 358-0001 (Office)',
          email: 'm.tom@davidbowietribute.com',
          city: 'Cape Canaveral',
          info: 'Take your protein pills and put your helmet on',
          objects: 'object 51',
          active: true,
          shown: false
        },
        {
          id: '03',
          name: 'Гавриил',
          middlename: 'Самуилович',
          surname: 'Гайзенберг',
          phone: '+7(169)908-16-14',
          email: 'g.gavriil@test.com',
          city: 'Эль Пуэблито, Мексика',
          info: '',
          objects: '338 Cedar Rd. Miami, FL 33193',
          active: true,
          shown: false
        },
      ]
    };
    
    let getComponent = (props) => {
      return (
        <ClientsList {...props} />
      )
    }
  
    let component = shallow(getComponent(props));
  
    it('have one unordered list', () => {
      const wrapper = component;
      expect(wrapper.find('ul')).to.have.lengthOf(1);
    })
  
    it('have three clients', () => {
      const wrapper = component;
      expect(wrapper.find(Client).length).equal(3);
    });
    
    it('matches the snapshot', () => {
      const props = {
        clients: []
      }
      const tree = renderer.create(<ClientsList {...props} />).toJSON();
      jestExpect(tree).toMatchSnapshot();
    })
  });