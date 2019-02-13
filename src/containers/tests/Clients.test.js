import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store' //ES6 modules

// components and containers testing
import Clients from '../Clients';

// mock store
const middlewares = []
const mockStore = configureStore(middlewares)

describe('Clients container', () => {
    const initialState = {};
    const store = mockStore(initialState);
    let newProps = {
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
    
    let getContainer = (newProps) => {
      return (
        <Provider store={store}>
          <Clients {...newProps} />
        </Provider>
      )
    }
  
    let container = shallow(getContainer(newProps));
    
    it('renders one Clints container', () => {
      const wrapper = container;
      expect(wrapper.find(Clients).length).equal(1);
    })
});