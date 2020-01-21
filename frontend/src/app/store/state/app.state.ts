import {RouterReducerState} from "@ngrx/router-store";
import {initialPostState, IPostState} from "./post.state";

export interface IAppState {
  router?: RouterReducerState;
  posts: IPostState;
}

export const initialAppState: IAppState = {
  posts: initialPostState
};

export const getInitialState = (): IAppState => {
  return initialAppState;
};
