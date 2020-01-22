import {Component, OnInit} from '@angular/core';
import {Store, select} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {selectPostsError, selectPostsList} from "../../../store/selectors/post.selectors";
import IPost from "../../../models/post.model";
import {LoadPosts} from "../../../store/actions/post.actions";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: IPost.Model[];
  postsError$: boolean;

  constructor(private store: Store<IAppState>) {
    this.store.pipe(select(selectPostsList)).subscribe((posts: IPost.Model[]) => this.posts$ = posts);
    this.store.pipe(select(selectPostsError)).subscribe((error: boolean) => this.postsError$ = error);
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadPosts());
  }
}
