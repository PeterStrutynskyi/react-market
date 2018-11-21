import { handleActions } from 'redux-actions';
import * as constants from './cartConstants';

const initialState = {
  items: []

};

export default handleActions(
  {
    [constants.ADD]: (state, action) => ({
      ...state,
      items: [...state.items, {
        id: action.payload.id,
        count: 1
      }]
    }),
    [constants.REMOVE]: (state, action) => ({
      ...state,
      items: state.items.filter( item => item.id !== action.payload.id),
    }),

    [constants.CHANGE_COUNT]: (state, action) => console.log(action.payload) || ({
      ...state,
      items: state.items.map( item => item.id === action.payload.id &&
         {
            id: action.payload.id,
            count: action.payload.count
         }
      ),

    }),
  },
  initialState,
);
