import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {PostService} from "../../services/post/post.service";
import {EPostActions, LoadedPostsError, LoadedPostsSuccess} from "../actions/post.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class PostEffects {
  @Effect()
  loadPosts$ = this.actions$.pipe(
    ofType(EPostActions.LoadPosts),
    mergeMap(() => {
      return this.postService.loadPosts().pipe(
        map(posts => (new LoadedPostsSuccess(posts))),
        catchError(() => of(new LoadedPostsError()))
      )
    })
  );

  constructor(
    private actions$: Actions,
    private postService: PostService
  ) {}
}
