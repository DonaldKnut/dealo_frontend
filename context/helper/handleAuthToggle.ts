// utils/handleAuthToggle.ts
import { reducerCases } from "../stateReducerTypes";
import { useStateProvider } from "../StateContext";

export const handleAuthToggle = (type: "login" | "signup") => {
  const { state, dispatch } = useStateProvider();

  if (type === "login") {
    dispatch({
      type: reducerCases.TOGGLE_LOGIN_MODAL,
      showLoginModal: false,
    });
    dispatch({
      type: reducerCases.TOGGLE_SIGNUP_MODAL,
      showSignUpModal: true,
    });
  } else {
    dispatch({
      type: reducerCases.TOGGLE_SIGNUP_MODAL,
      showSignUpModal: false,
    });
    dispatch({
      type: reducerCases.TOGGLE_LOGIN_MODAL,
      showLoginModal: true,
    });
  }
};
