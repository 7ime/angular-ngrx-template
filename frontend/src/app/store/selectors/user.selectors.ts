import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IPostState} from "../state/post.state";

const selectPosts = (state: IAppState) => state.posts;

export const selectPostsList = createSelector(
  selectPosts,
  (state: IPostState) => state.posts
);
