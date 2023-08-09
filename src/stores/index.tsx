import { makeVar } from "@apollo/client";

type InitialState = {
  slackUrl?: string | null;
  backToWorksUrl?: string;
};

const initialState: InitialState = {
  slackUrl: null,
  backToWorksUrl: undefined,
};

export const slackUrlVar = makeVar(initialState.slackUrl);
export const backToWorksUrlVar = makeVar(initialState.backToWorksUrl);
