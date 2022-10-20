import {Component} from '@angular/core';
import {IAppState} from "./shared/models/app-state.model";
import {Store} from "@ngrx/store";
import {selectLoginLoading} from "./login/data-acess/store/user.selectors";
import {delay, merge} from "rxjs";
import {selectBlogPostsLoading} from "./home/data-acess/store/home-page.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading$ = merge(this.store.select((selectLoginLoading)), this.store.select(selectBlogPostsLoading)).pipe(delay(0))

  constructor(private store: Store<IAppState>,) {
  }
}
