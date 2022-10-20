import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {filter, map, Observable, take, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {IAppState} from "../../../shared/models/app-state.model";
import {Store} from "@ngrx/store";
import {selectIsLoggedIn} from "../../../login/data-acess/store/user.selectors";
import {loadBlogPostForBlogPostPage, saveBlogPostComment} from "../../../home/data-acess/store/home-page.actions";
import {selectBlogPostById, selectCommentsByBlogPostId} from "../../../home/data-acess/store/home-page.selectors";

@Component({
  selector: 'app-home-page',
  templateUrl: './blog-page.html',
  styleUrls: ['./blog-page.scss']
})
export class BlogPage implements OnInit {
  isLoggedIn$: Observable<boolean> = this.store.select(selectIsLoggedIn);
  selectedId: string = this.ar.snapshot.params['id'];
  blogPost$ = this.store.select(selectBlogPostById(this.selectedId));
  comments$ = this.store.select(selectCommentsByBlogPostId(this.selectedId)).pipe(
    map(([...comments]) => comments.sort(sorter)),
  );

  checkIfBlogPostLoaded$ = this.blogPost$.pipe(
    filter(blogPost => !blogPost),
    take(1),
    tap(_ => this.store.dispatch(loadBlogPostForBlogPostPage())),
  ).subscribe()

  constructor(private ar: ActivatedRoute, public store: Store<IAppState>, private dialog: MatDialog, private router: Router,) {
  }

  ngOnInit(): void {
  }

  noRightToCommit(): void {
    this.router.navigate(['../login']).then();
  }

  onComment(commentText: string): void {
    this.store.dispatch(saveBlogPostComment({req: {blogId: this.selectedId, commentText}}))
  }

}

export const sorter = (commentA: { createdOn: Date }, commentB: { createdOn: Date }): number => {
  return commentB.createdOn.getTime() - commentA.createdOn.getTime();
}
