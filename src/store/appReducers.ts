import { combineReducers } from "redux";
import * as appActions from "./appActions";
import { linkSync } from "fs";

export function replaceProperty(
  state: any = { replaceProperty: "" },
  action: any
) {
  const { type, payload } = action;

  switch (type) {
    case appActions.SET_REPLACE_PROPERTY: {
      return payload.replaceProperty;
    }
    default:
      return state;
  }
}

export function replaceOperatorProperties(
  state: any = {
    ports: {},
    attributes: {
      replaceProperty: {},
    },
  },
  action: any
) {
  const { type, payload } = action;
  switch (type) {
    case appActions.SET_REPLACE_OPERATOR_PROPERTIES: {
      // console.log("PAYLOADDDD", payload);
      return payload;
    }
    default:
      return state;
  }
}

export function updatedLinks(state: any = { links: [] }, action: any) {
  const { type, payload } = action;
  switch (type) {
    case appActions.SET_UPDATED_LINK: {
      console.log("UPDATED LINK PAYLOAD", payload);
      // debugger;
      const newState = { ...state, ...state.links.push(payload) };
      console.log(newState);
      // const newState = { ...state, links.push()};
      return newState;
    }
    default:
      return state;
  }
}

export const appReducers = {
  replaceProperty,
  replaceOperatorProperties,
  updatedLinks,
};

export const rootReducer = combineReducers({
  ...appReducers,
});
