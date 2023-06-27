import { makeVar } from "@apollo/client";

type InitialState = {
  slackUrl?: string | null;
};

const initialState: InitialState = {
  slackUrl: null,
};

export const slackUrlVar = makeVar(initialState.slackUrl);
