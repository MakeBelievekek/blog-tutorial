import {Observable} from "rxjs";
import {IBlogPost} from "../../../shared/models/blog-post.model";
import {IComment} from "../../../shared/models/comment.model";
import {ISaveCommentRequest} from "../../../shared/models/save-comment-request.model";
import {IResponse} from "../../../shared/models/response.model";

export abstract class AbstractBlogPostService {

  abstract getTodos(): Observable<IBlogPost[]>;
  abstract saveComment(req: ISaveCommentRequest): Observable<IResponse<IComment>>;
}
