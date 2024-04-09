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

export const initialState: StateType = {
  showLoginModal: false,
  showSignUpModal: false,
};
