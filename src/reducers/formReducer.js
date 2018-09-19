import { DATA_FORM } from 'actions/actionTypes';

const reducer = (state = {}, action) => {
  //const cloneState = Object.assign({}, state);
  switch (action.type) {
  case DATA_FORM:
    return action.payload;
  default:
    return state;
  }
};

export default reducer;
