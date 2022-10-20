import {IAppState} from "../../../shared/models/app-state.model";
import {createSelector} from "@ngrx/store";

export const selectBlog = (state: IAppState) => state.blog;

export const selectBlogPostsLoading = createSelector(
  selectBlog,
  (blog) => blog.isLoading
);

export const selectBlogPostsList = createSelector(
  selectBlog,
  (blog) => blog.blogPosts
);

export const selectBlogPostById = (blogId: string) => createSelector(
  selectBlogPostsList,
  (blogPostList) => blogPostList.find(({id}) => blogId === id)
);

export const selectCommentsByBlogPostId = (blogId: string) => createSelector(
  selectBlogPostById(blogId),
  (blogPost) => (blogPost?.comments ? blogPost.comments : [])
);


