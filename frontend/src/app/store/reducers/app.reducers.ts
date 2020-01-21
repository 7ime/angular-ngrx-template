import {ActionReducerMap} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {postReducers} from "./post.reducers";
import {routerReducer} from "@ngrx/router-store";

export const appReducers: ActionReducerMap<IAppState, any> = {
  posts: postReducers,
  router: routerReducer
};
