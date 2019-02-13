import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store' //ES6 modules

// components and containers testing
import Objects from '../Objects';

// mock store
const middlewares = []
const mockStore = configureStore(middlewares)

describe('Objects container', () => {
    const initialState = {};
    const store = mockStore(initialState);
    let newProps = {
      objects: [
        {
          id: '01',
          type: 'недвижимость',
          address: 'object 1',
          client: 'Ринат Москвин',
          contract: '# 709-2017',
          services: 'охрана, видеонаблюдение, датчик воды, датчик дыма',
          status: 'ожидает оплаты',
          date: '07.09.2017',
          expiration: 'нет',
          active: true,
          shown: false
        },
        {
          id: '02',
          type: 'недвижимость',
          address: 'object 51',
          client: 'Major Tom',
          contract: '# 001-1969',
          services: 'охрана, видеонаблюдение, датчик воды',
          status: 'действует',
          date: '11.07.1969',
          expiration: 'бесконечный',
          active: true,
          shown: false
        },
      ]
    };
    
    let getContainer = (newProps) => {
      return (
        <Provider store={store}>
          <Objects {...newProps} />
        </Provider>
      )
    }
  
    let container = shallow(getContainer(newProps));
    
    it('renders one Objects container', () => {
      const wrapper = container;
      expect(wrapper.find(Objects).length).equal(1);
    })
  });