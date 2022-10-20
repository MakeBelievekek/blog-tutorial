import {IComment} from "./comment.model";

export interface IBlogPost{
  id: string;
  title: string;
  titleImgUrl: string;
  description: string;
  body: string;
  createdOn: Date;
  comments: IComment[]

}
