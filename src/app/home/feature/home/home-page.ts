import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadBlogPostForBlogPostPage} from "../../data-acess/store/home-page.actions";
import {selectBlogPostsList} from "../../data-acess/store/home-page.selectors";
import {IAppState} from "../../../shared/models/app-state.model";
import {delay, filter, map, Observable, tap} from "rxjs";
import {IBlogPost} from "../../../shared/models/blog-post.model";
import {ActivatedRoute, Router} from "@angular/router";
import {sorter} from "../../../blog/feature/blog/blog-page";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})
export class HomePage implements OnInit {
  blogPosts$: Observable<IBlogPost[]> = this.store.select(selectBlogPostsList).pipe(
    map(([...blogPosts]) => blogPosts.sort(sorter))
  );

  checkIfBlogPostsLoaded$ = this.blogPosts$.pipe(
    filter(blogPosts => blogPosts.length === 0),
    delay(0),
    tap(_ => this.store.dispatch(loadBlogPostForBlogPostPage()))
  ).subscribe()

  constructor(private store: Store<IAppState>, private router: Router, private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
  }

  navigateOnBlogPostSelection(selectedBlog: IBlogPost): void {
    console.log('click click')
    this.router.navigate(['./blog', selectedBlog.id]).then();
  }
}
