export const reducerCases = {
  TOGGLE_LOGIN_MODAL: "TOGGLE_LOGIN_MODAL",
  TOGGLE_SIGNUP_MODAL: "TOGGLE_SIGNUP_MODAL",
};

export type ActionTypes = {
  type: string;
  showLoginModal?: boolean;
  showSignUpModal?: boolean;
};

export interface StateType {
  showLoginModal: boolean;
  showSignUpModal: boolean;
}

// Define initial state
export const initialState: StateType = {
  showLoginModal: false,
  showSignUpModal: false,
};
