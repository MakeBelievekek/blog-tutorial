import {createAction, props} from "@ngrx/store";
import {IBlogPost} from "../../../shared/models/blog-post.model";
import {ISaveCommentAction} from "../../../shared/models/save-comment-request.model";
import {IComment} from "../../../shared/models/comment.model";

export const loadBlogPosts = createAction('[Home Page] load blog posts');

export const loadBlogPostsSuccess = createAction(
  '[BlogPosts API] blog posts load success',
  props<{ blogPosts: IBlogPost[] }>()
);

export const loadBlogPostsFailure = createAction(
  '[BlogPosts API] blog posts  load failure',
  props<{ error: string }>()
);

export const saveBlogPostComment = createAction(
  '[BlogPost Page] save blog post comment',
  props<{ req: ISaveCommentAction; }>()
);

export const saveCommentSuccess = createAction(
  '[BlogPost API] save blog post comment success',
  props<{ content: IComment; }>()
);

export const saveCommentFailure = createAction(
  '[BlogPost API] save blog post comment failure',
  props<{ error: string }>()
);

export const loadBlogPostForBlogPostPage = createAction('[BlogPost Page] load blog posts');
