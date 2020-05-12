export const SET_REPLACE_PROPERTY = "SET_REPLACE_PROPERTY";

interface SetReplacePropertyAction {
  type: typeof SET_REPLACE_PROPERTY;
  payload: {
    replaceProperty: string;
  };
}

export type AppActions = SetReplacePropertyAction;

export function setReplaceProperty(replaceProperty: string) {
  return {
    type: SET_REPLACE_PROPERTY,
    payload: {
      replaceProperty,
    },
  };
}
