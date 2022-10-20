import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogPage} from "./blog-page";
import {BlogRoutingModule} from "./blog-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {CommentModule} from "../../shared/ui/comment/comment.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {YesNoDialogComponent} from "../../../shared/ui/question-dialog-navigate/yes-no-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommentInputModule} from "../../shared/ui/comment-input/comment-input.module";


@NgModule({
  declarations: [
    BlogPage
  ],
  imports: [
    CommonModule,
    CommentModule,
    BlogRoutingModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommentInputModule
  ],
  entryComponents: [YesNoDialogComponent]
})
export class BlogModule {
}
