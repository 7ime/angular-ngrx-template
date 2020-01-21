import {initialPostState, IPostState} from "../state/post.state";
import {EPostActions, PostActions} from "../actions/post.actions";

export const postReducers = (state = initialPostState, action: PostActions): IPostState => {
  switch (action.type) {
    case EPostActions.GetPosts: {
      return {
        ...state,
        posts: action.payload
      };
    }
    default:
      return state;
  }
};
