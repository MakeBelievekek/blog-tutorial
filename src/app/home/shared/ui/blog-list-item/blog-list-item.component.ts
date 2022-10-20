import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBlogPost} from "../../../../shared/models/blog-post.model";

@Component({
  selector: 'app-blog-list-item',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.scss']
})
export class BlogListItemComponent implements OnInit {
  @Input() blogPost!: IBlogPost;
  @Output() selectedBlogPost = new EventEmitter<IBlogPost>()

  constructor() {
  }

  ngOnInit(): void {
  }
}
