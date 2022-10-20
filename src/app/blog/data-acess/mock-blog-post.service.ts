import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {IBlogPost} from "../../shared/models/blog-post.model";
import {AbstractBlogPostService} from "./abstraction/abstract-blog-post.service";
import {IComment} from "../../shared/models/comment.model";
import {ISaveCommentRequest} from "../../shared/models/save-comment-request.model";
import {IResponse} from "../../shared/models/response.model";
const body =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, architecto asperiores atque commodi consectetur debitis dolore eos facere, illum laboriosam natus quia quos repudiandae sapiente veniam vitae voluptas voluptatum! Dolor eos neque placeat rerum soluta. Dignissimos ducimus, eos facilis harum nisi obcaecati praesentium vitae voluptates.' +
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, architecto asperiores atque commodi consectetur debitis dolore eos facere, illum laboriosam natus quia quos repudiandae sapiente veniam vitae voluptas voluptatum! Dolor eos neque placeat rerum soluta. Dignissimos ducimus, eos facilis harum nisi obcaecati praesentium vitae voluptates.' +
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, architecto asperiores atque commodi consectetur debitis dolore eos facere, illum laboriosam natus quia quos repudiandae sapiente veniam vitae voluptas voluptatum! Dolor eos neque placeat rerum soluta. Dignissimos ducimus, eos facilis harum nisi obcaecati praesentium vitae voluptates.' +
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, architecto asperiores atque commodi consectetur debitis dolore eos facere, illum laboriosam natus quia quos repudiandae sapiente veniam vitae voluptas voluptatum! Dolor eos neque placeat rerum soluta. Dignissimos ducimus, eos facilis harum nisi obcaecati praesentium vitae voluptates.';

const mockComments: IComment[] = [
  {
    userId: '1234',
    blogId: '1004',
    commentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi dolor dolores eligendi facilis impedit, incidunt ipsa neque quo totam ullam, voluptatibus! Dolores dolorum exercitationem facere laborum maxime, possimus rerum temporibus totam.',
    id: '10000',
    userEmail: 'test@test.com',
    createdOn: new Date(2022, 9, 19),
  },
  {
    userId: '1234',
    blogId: '1004',
    commentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi dolor dolores eligendi facilis impedit, incidunt ipsa neque quo totam ullam, voluptatibus! Dolores dolorum exercitationem facere laborum maxime, possimus rerum temporibus totam.',
    id: '10000',
    userEmail: 'test@test.com',
    createdOn: new Date(2022, 9, 10),
  },
  {
    userId: '1234',
    blogId: '1004',
    commentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi dolor dolores eligendi facilis impedit, incidunt ipsa neque quo totam ullam, voluptatibus! Dolores dolorum exercitationem facere laborum maxime, possimus rerum temporibus totam.',
    id: '10000',
    userEmail: 'test@test.com',
    createdOn: new Date(2022, 9, 20),
  },
  {
    userId: '1234',
    blogId: '1004',
    commentText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi dolor dolores eligendi facilis impedit, incidunt ipsa neque quo totam ullam, voluptatibus! Dolores dolorum exercitationem facere laborum maxime, possimus rerum temporibus totam.',
    id: '10000',
    userEmail: 'test@test.com',
    createdOn: new Date(2022, 9, 12),
  },
];
const mockBlogPosts: IBlogPost[] = [
  {
    title: 'Ha itt a vége, fuss el véle... a BLOGPOST -hoz!',
    description: 'Jó állapotú, de már nem használt mesekönyveiteket ajándékozzátok oda egy rászoruló kisgyereknek, hogy most\nvalaki másnál kezdődhessen a mese!',
    createdOn: new Date(),
    id: '1004',
    comments: mockComments.map(comment => {
      comment.blogId = '1004';
      return {...comment}
    }),
    body,
    titleImgUrl: '/assets/images/home_small.webp',
  },
  {
    title: 'Ha itt a vége, fuss el véle... a BLOGPOST -hoz!',
    description: 'Jó állapotú, de már nem használt mesekönyveiteket ajándékozzátok oda egy rászoruló kisgyereknek, hogy most\nvalaki másnál kezdődhessen a mese!',
    createdOn: new Date(),
    id: '1005',
    comments: mockComments.map(comment => {
      comment.blogId = '1005';
      return {...comment}
    }),
    body,
    titleImgUrl: '/assets/images/home_small.webp',
  },
  {
    title: 'Ha itt a vége, fuss el véle... a BLOGPOST -hoz!',
    description: 'Jó állapotú, de már nem használt mesekönyveiteket ajándékozzátok oda egy rászoruló kisgyereknek, hogy most\nvalaki másnál kezdődhessen a mese!',
    createdOn: new Date(),
    id: '1006',
    comments: mockComments.map(comment => {
      comment.blogId = '1006';
      return {...comment}
    }),
    body,
    titleImgUrl: '/assets/images/home_small.webp',
  },
  {
    title: 'Ha itt a vége, fuss el véle... a BLOGPOST -hoz!',
    description: 'Jó állapotú, de már nem használt mesekönyveiteket ajándékozzátok oda egy rászoruló kisgyereknek, hogy most\nvalaki másnál kezdődhessen a mese!',
    createdOn: new Date(),
    id: '1007',
    comments: mockComments.map(comment => {
      comment.blogId = '1007';
      return {...comment}
    }),
    body,
    titleImgUrl: '/assets/images/home_small.webp',
  },
]

@Injectable()
export class MockBlogPostService implements AbstractBlogPostService {

  constructor() {
  }

  getTodos(): Observable<IBlogPost[]> {
    return of([...mockBlogPosts]).pipe(delay(3000))
  }

  saveComment({userId, commentText, blogId, userEmail}: ISaveCommentRequest): Observable<IResponse<IComment>> {
    const createdCommit: IComment = {
      id: new Date().getTime().toString(),
      userId,
      commentText,
      createdOn: new Date(),
      blogId,
      userEmail
    }
    const blogPost = {...mockBlogPosts.find(({id}) => id === blogId)};
    if (!blogPost) {
      throw new Error('Mock blog post dose not exists!');
    }

    const {comments} = blogPost;
    blogPost.comments = Array.isArray(comments) ? [...comments, createdCommit] : [createdCommit]

    return of({content: createdCommit}).pipe(delay(500))
  }
}
