import { makeVar } from "@apollo/client";

type InitialState = {
  backToWorksUrl?: string;
};

const initialState: InitialState = {
  backToWorksUrl: undefined,
};

export const backToWorksUrlVar = makeVar(initialState.backToWorksUrl);
