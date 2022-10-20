import {IBlogPost} from "../../../shared/models/blog-post.model";
import {createReducer, on} from "@ngrx/store";
import {
  loadBlogPostForBlogPostPage,
  loadBlogPosts,
  loadBlogPostsFailure,
  loadBlogPostsSuccess,
  saveCommentSuccess
} from "./home-page.actions";
import {IComment} from "../../../shared/models/comment.model";

export const initialState: { blogPosts: IBlogPost[], isLoading: boolean } = {
  blogPosts: [],
  isLoading: false,
};

export const blogPostReducer = createReducer(
  initialState,
  on(loadBlogPosts, loadBlogPostForBlogPostPage, (state) => ({...state, isLoading: true})),
  on(loadBlogPostsSuccess, (state, {blogPosts}) => {
    return ({
      ...state,
      blogPosts: [...blogPosts],
      isLoading: false
    });
  }),
  on(loadBlogPostsFailure, (state, {error}) => ({
    ...state,
    isLoading: false
  })),
  on(saveCommentSuccess, (state, {content: comment}) => {
    const indexOfBlogPostToPatch = state.blogPosts.findIndex(({id}) => id === comment.blogId);
    let comments: IComment[] = [];
    let blogPosts: IBlogPost[] = Array.isArray(state.blogPosts) ? state.blogPosts : [];

    if (indexOfBlogPostToPatch > -1) {
      const blogPost = {...state.blogPosts[indexOfBlogPostToPatch]};
      comments = Array.isArray(blogPost.comments) ? blogPost.comments : [];
      const patchedBlogPosts = [ ...blogPosts.slice(0, indexOfBlogPostToPatch).concat(blogPosts.slice(indexOfBlogPostToPatch + 1)) ];
      blogPost.comments = [...comments, comment]

      patchedBlogPosts.push(blogPost)
      blogPosts = patchedBlogPosts;
    }

    return ({
      ...state,
      blogPosts: [...blogPosts],
      isLoading: false
    });
  })
);
