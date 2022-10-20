export interface ISaveCommentRequest {
  blogId: string,
  commentText: string
  userId: string;
  userEmail: string;
}

export interface ISaveCommentAction {
  blogId: string,
  commentText: string
}
