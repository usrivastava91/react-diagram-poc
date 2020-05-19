export const SET_REPLACE_PROPERTY = "SET_REPLACE_PROPERTY";
export const SET_REPLACE_OPERATOR_PROPERTIES =
  "SET_REPLACE_OPERATOR_PROPERTIES";

export const SET_UPDATED_LINK = "SET_UPDATED_LINK";

interface SetReplaceOperatorProperties {
  type: typeof SET_REPLACE_OPERATOR_PROPERTIES;
  payload: {
    replaceOperatorProperties: {};
  };
}
interface SetReplacePropertyAction {
  type: typeof SET_REPLACE_PROPERTY;
  payload: {
    replaceProperty: string;
  };
}

interface SetUpdatedLInk {
  type: typeof SET_UPDATED_LINK;
  payload: {
    updatedLink: {};
  };
}
export type AppActions =
  | SetReplacePropertyAction
  | SetReplaceOperatorProperties
  | SetUpdatedLInk;

export function setReplaceOperatorProperties(replaceOperatorProperties: {}) {
  return {
    type: SET_REPLACE_OPERATOR_PROPERTIES,
    payload: {
      replaceOperatorProperties,
    },
  };
}

export function setReplaceProperty(replaceProperty: string) {
  return {
    type: SET_REPLACE_PROPERTY,
    payload: {
      replaceProperty,
    },
  };
}

export function SetUpdatedLInk(updatedLink: {}) {
  return {
    type: SET_UPDATED_LINK,
    payload: {
      updatedLink,
    },
  };
}
