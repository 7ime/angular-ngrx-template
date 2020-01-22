import {Observable} from "rxjs";
import IPost from "../models/post.model";

export interface IPostService {
  loadPosts(): Observable<IPost.Model[]>
}
