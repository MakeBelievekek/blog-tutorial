import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {IAppState} from "../../../shared/models/app-state.model";
import {MockBlogPostService} from "../../../blog/data-acess/mock-blog-post.service";
import {
  loadBlogPostForBlogPostPage,
  loadBlogPosts,
  loadBlogPostsFailure,
  loadBlogPostsSuccess,
  saveBlogPostComment, saveCommentFailure,
  saveCommentSuccess
} from "./home-page.actions";
import {catchError, EMPTY, map, of, switchMap, withLatestFrom} from "rxjs";
import {AbstractBlogPostService} from "../../../blog/data-acess/abstraction/abstract-blog-post.service";
import {selectUser, selectUserInfo} from "../../../login/data-acess/store/user.selectors";

@Injectable()
export class BlogPostEffects {
  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private blogPostService: AbstractBlogPostService
  ) {

  }

  loadBlogPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBlogPosts, loadBlogPostForBlogPostPage),
      switchMap(() =>
        this.blogPostService.getTodos().pipe(
          map((blogPosts) => loadBlogPostsSuccess({blogPosts})),
          catchError((error) => of(loadBlogPostsFailure({error})))
        )
      )
    )
  );

  saveBlogPostsComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveBlogPostComment),
      withLatestFrom(this.store.select(selectUserInfo)),
      switchMap(([{req: {blogId, commentText}}, {id: userId, email: userEmail}]) =>
        this.blogPostService.saveComment({blogId, commentText, userId, userEmail}).pipe(
          map(({content}) => saveCommentSuccess({content})),
          catchError((error) => of(saveCommentFailure({error})))
        )
      )
    )
  );
}
