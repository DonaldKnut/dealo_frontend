import { Reducer } from "react";

// Define action types
export const reducerCases = {
  TOGGLE_LOGIN_MODAL: "TOGGLE_LOGIN_MODAL",
  TOGGLE_SIGNUP_MODAL: "TOGGLE_SIGNUP_MODAL",
};

// Define action interfaces
export type ActionTypes = {
  type: string;
  showLoginModal?: boolean;
  showSignUpModal?: boolean;
};

// Define state type
export interface StateType {
  showLoginModal: boolean;
  showSignUpModal: boolean;
}

// Define initial state
// export const initialState: StateType = {
//   showLoginModal: false,
//   showSignUpModal: false,
// };

// Define reducer function
export const reducer: Reducer<StateType, ActionTypes> = (state, action) => {
  switch (action.type) {
    case reducerCases.TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: !state.showLoginModal,
      };
    case reducerCases.TOGGLE_SIGNUP_MODAL:
      return {
        ...state,
        showSignUpModal: !state.showSignUpModal,
      };
    default:
      return state;
  }
};
