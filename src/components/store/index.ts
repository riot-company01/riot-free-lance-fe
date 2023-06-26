import { makeVar } from "@apollo/client";

type InitialState = {
  slackUrl: string;
};

const initialState: InitialState = {
  slackUrl: "",
};

export const slackUrlVar = makeVar(initialState.slackUrl);
