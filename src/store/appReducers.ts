import { combineReducers } from "redux";
import * as appActions from "./appActions";

const initialState = {
  replaceProperty: "",
};

export function replaceProperty(state: any = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case appActions.SET_REPLACE_PROPERTY: {
      return payload.replaceProperty;
    }
    default:
      return state;
  }
}

export const appReducers = { replaceProperty };

export const rootReducer = combineReducers({
  ...appReducers,
});
