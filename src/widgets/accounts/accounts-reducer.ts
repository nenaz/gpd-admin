import { SET_WIDGET_ACCOUNTS_DATA } from './accounts-actions';

const INITIAL_STATE = {};

export const accountsWidgetReducer = (
  state: any = INITIAL_STATE, 
  { type, payload }: { type: string, payload: any }) => {
  switch(type) {
    case SET_WIDGET_ACCOUNTS_DATA:
      return {
        ...state,
        accountsData: payload,
      };
    default:
      return state;
  }
}
