"use server";

import { Reducer } from "react";
import { ActionTypes, StateType, reducerCases } from "../stateReducerTypes";

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
