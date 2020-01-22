import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import Paths from "../../api/paths";
import {IPostService} from "../index";
import IPost from "../../models/post.model";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class PostService implements IPostService {
  constructor(private http: HttpClient) {}

  loadPosts(): Observable<IPost.Model[]> {
    return this.http.get<IPost.Model[]>(Paths.Post.GetPosts());
  }
}
