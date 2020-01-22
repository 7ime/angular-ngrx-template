import IPost from "../../models/post.model";

export interface IPostState {
  posts: IPost.Model[];
  error: boolean;
}

export const initialPostState: IPostState = {
  posts: [],
  error: false
};
