import * as actions from '../../actions/actions';
import reducer from '../reducers';

describe('redux reducers', () => {
  it('should return the initial state', () => {
    jestExpect(reducer(undefined, {})
    ).toEqual(
      {"clients": [], "form": {}, "objects": [], "visibilityFilter": "SHOW_ALL"}
    )
  });

  it('should handle ADD_CLIENT', () => {
    jestExpect(
      reducer([], {
        type: actions.ADD_CLIENT,
        values: {
          name: 'test'
        }
      })
    ).toEqual(
      {
        "clients": [
          {
            id: '012',
            name: 'test',
            middlename: undefined,
            surname: undefined,
            phone: undefined,
            email: undefined,
            city: undefined,
            info: undefined,
            objects: undefined,
            active: true,
            shown:false
          }
        ],
        form: {},
        objects: [],
        visibilityFilter: 'SHOW_ALL'
      }
    )
  });
  it('should handle ADD_OBJECT', () => {
    jestExpect(
      reducer([], {
        type: actions.ADD_OBJECT,
        values: {
          type: 'test'
        }
      })
    ).toEqual({
        clients: [],
        form: {},
        objects: [
          {
            id: '005',
            type: 'test',
            address: undefined,
            client: undefined,
            contract: undefined,
            services: undefined,
            status: undefined,
            date: undefined,
            expiration: undefined,
            active: true,
            shown:false
          }
        ],
        visibilityFilter: 'SHOW_ALL'
      })
  })
});