import {IBlogPost} from "./blog-post.model";
import {IUser} from "./user.model";

export interface IAppState {
  blog: {
    blogPosts: IBlogPost[],
    isLoading: boolean;
  };
  user:{
    userInfo: IUser,
    isLoggedIn: boolean;
    isLoading: boolean;
  }
}
