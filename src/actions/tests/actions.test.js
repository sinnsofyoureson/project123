import * as actions from '../actions';


describe('redux actions', () => {
    it('should crate new client', () => {
      const name = 'Test';
      const values = name;
      const expectedAction = {
        type: actions.ADD_CLIENT,
        values: name
      }
      jestExpect(actions.addClient(values)).toEqual(expectedAction)
    });
  
    it('should crate new object', () => {
      const address = 'Test';
      const values = address;
      const expectedAction = {
        type: actions.ADD_OBJECT,
        values: address
      }
      jestExpect(actions.addObject(values)).toEqual(expectedAction)
    });
  
    it('should toggle ACTIVE property in CLIENT using the id', () => {
      const id = '01';
      const expectedAction = {
        type: actions.TOGGLE_ACTIVE_CLIENT,
        id
      };
      jestExpect(actions.toggleActiveClient(id)).toEqual(expectedAction);
    });
  
    it('should toggle ACTIVE property in OBJECT using the id', () => {
      const id = '01';
      const expectedAction = {
        type: actions.TOGGLE_ACTIVE_OBJECT,
        id
      };
      jestExpect(actions.toggleActiveObject(id)).toEqual(expectedAction);
    });
  
    it('should toggle SHOWN property in CLIENT using the id', () => {
      const id = '01';
      const expectedAction = {
        type: actions.TOGGLE_SHOWN_CLIENT,
        id
      };
      jestExpect(actions.toggleShownClient(id)).toEqual(expectedAction);
    });
  
    it('should toggle SHOWN property in OBJECT using the id', () => {
      const id = '01';
      const expectedAction = {
        type: actions.TOGGLE_SHOWN_OBJECT,
        id
      };
      jestExpect(actions.toggleShownObject(id)).toEqual(expectedAction);
    });
  });