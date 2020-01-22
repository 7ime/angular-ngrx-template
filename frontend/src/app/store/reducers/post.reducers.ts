import {initialPostState, IPostState} from "../state/post.state";
import {EPostActions, PostActions} from "../actions/post.actions";

export const postReducers = (state = initialPostState, action: PostActions): IPostState => {
  switch (action.type) {
    case EPostActions.LoadedPostsSuccess: {
      return {
        ...state,
        posts: action.payload,
        error: false
      };
    }
    case EPostActions.LoadedPostsError: {
      return {
        ...state,
        error: true
      }
    }
    default:
      return state;
  }
};
