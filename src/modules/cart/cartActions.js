import { createAction } from 'redux-actions';
import * as constants from './cartConstants';


export const add = createAction(constants.ADD);
export const remove = createAction(constants.REMOVE);
export const changeCount = createAction(constants.CHANGE_COUNT);