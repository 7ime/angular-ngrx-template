import {Action} from "@ngrx/store";
import IPost from "../../models/post.model";

export enum EPostActions {
  LoadedPostsSuccess = '[Post] Loaded posts success',
  LoadedPostsError = '[Post] Loaded posts error',
  LoadPosts = '[Post] Load posts'
}

export class LoadedPostsSuccess implements Action {
  public readonly type = EPostActions.LoadedPostsSuccess;
  constructor(public payload: IPost.Model[]) {}
}

export class LoadPosts implements Action {
  public readonly type = EPostActions.LoadPosts;
}

export class LoadedPostsError implements Action {
  public readonly type = EPostActions.LoadedPostsError;
}

export type PostActions = LoadedPostsSuccess | LoadPosts | LoadedPostsError;


