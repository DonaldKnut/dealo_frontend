"use client";
import React, {
  createContext,
  useReducer,
  Dispatch,
  ReactNode,
  useContext,
} from "react";
import { ActionTypes, StateType, initialState } from "./stateReducerTypes";

// Define context and provider
export const StateContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionTypes>;
}>({
  state: {} as StateType,
  dispatch: () => null,
});

// Define StateProvider component
export const StateProvider: React.FunctionComponent<{
  initialState: StateType;
  reducer: React.Reducer<StateType, ActionTypes>;
  children: ReactNode;
}> = ({ initialState: providedInitialState, reducer, children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    providedInitialState || initialState
  );

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
