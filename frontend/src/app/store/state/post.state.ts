import IPost from "../../models/post.model";

export interface IPostState {
  posts: IPost.Model[];
}

export const initialPostState: IPostState = {
  posts: []
};
