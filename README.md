# Korean Dummy JSON Fetcher

<div align="center">
   <a href="https://koreandummyjson.site"><img src="https://koreandummyjson.site/icons/logo-icon.svg" /></a><br>

[![npm version](https://img.shields.io/npm/v/korean-dummy-json-fetcher?style=flat)](https://www.npmjs.com/package/korean-dummy-json-fetcher)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=korean-dummy-json-fetcher&query=$.install.pretty&label=install%20size&style=flat)](https://packagephobia.com/result?p=korean-dummy-json-fetcher)
[![npm downloads](https://img.shields.io/npm/dt/korean-dummy-json-fetcher.svg?style=flat)](https://npm-stat.com/charts.html?package=korean-dummy-json-fetcher)

</div>

[koreanDummyJSON](https://github.com/NamJongtae/koreanDummyJSON) 프로젝트를 기반으로 만들어졌으며, 직접 비동기 API 호출 작업 없이 바로 더미 데이터를 가져올 수 있습니다.

**단순 데이터 조회뿐 아니라, PATCH, PUT, POST, DELETE 등 CRUD API도 모두 지원**하여 실제 REST API와 유사하게 테스트 및 개발에 활용할 수 있습니다.

자세한 API별 사용법은 [DOCS](https://www.koreandummyjson.site/docs/users)를 참고해주세요.

## Features

- 한국어 기반 더미 데이터를 제공합니다.
- 사용자, 할 일, 게시글, 댓글, 책, 리뷰 등 다양한 엔드포인트을 지원합니다.
- 페이지네이션 기능을 지원합니다.
- **GET뿐 아니라 테스트 모킹용 PATCH, PUT, POST, DELETE 등 CRUD API를 지원합니다.**
- **토큰 인증(Auth), 동적 이미지 생성(Image) API를 지원합니다.**
- **한글 로렘 입숨 생성 API를 지원합니다.**
- TypeScript를 지원합니다.(타입 정의 포함)
- ESM/CJS를 모두 지원합니다.
- **비동기 fetch 작업 없이 바로 더미 데이터 반환합니다.**

<br/>

<table>
  <tr>
    <td>
      <p><strong>📌 참고사항</strong></p>
      <p>
        이 라이브러리의 <code>PATCH</code>, <code>PUT</code>, <code>POST</code>, <code>DELETE</code> API는 서버의 데이터를 영구적으로 변경하지 않습니다. <br/> 
        <strong>요청에 대한 성공적인 모의(mock) 응답을 반환할 뿐, 실제 데이터는 원래 상태 그대로 유지됩니다.</strong>
      </p>
    </td>
  </tr>
</table>

## Resources

아래 9개의 리소스를 제공합니다.

| Resource | Information         |
| -------- | ------------------- |
| users    | 유저 20명           |
| posts    | 게시물 100개        |
| comments | 댓글 500개          |
| todos    | 할 일 200개         |
| books    | 책 100개            |
| reviews  | 리뷰 500개          |
| auth     | 로그인 및 인증/인가 |
| image    | 동적 이미지 생성    |
| lorem    | 한글 로렘 입숨 생성 |

## Installing

### npm
```bash
npm install korean-dummy-json-fetcher
```

### yarn
```bash
yarn add korean-dummy-json-fetcher
```

### pnpm
```bash
pnpm add korean-dummy-json-fetcher
```

## CDN

### unpkg

```html
<script src="https://unpkg.com/korean-dummy-json-fetcher@1.1.0/dist/index.min.js"></script>
```

### jsdelivr

```html
<script src="https://cdn.jsdelivr.net/npm/korean-dummy-json-fetcher@1.1.0/dist/index.min.js"></script>
```

## Usage

### Users

```ts
import {
  getUsers,
  getUser,
  createUser,
  patchUser,
  putUser,
  deleteUser,
} from "korean-dummy-json-fetcher";

async function fetchUsers() {
  // 전체 유저 목록 가져오기
  const users = await getUsers();
  console.log(users);

  // 유저 목록 페이지네이션
  const usersPage = await getUsers({ page: 1, limit: 10 });
  console.log(usersPage);

  // 특정 유저 가져오기
  const user = await getUser({ id: 1 });
  console.log(user);

  // 유저 생성
  const createUserResult = await createUser({
    username: "newuser",
    email: "newuser@example.com",
    phone: "010-1234-5678",
    address: "서울시 강남구",
  });
  console.log(createUserResult);

  // 유저 일부 수정
  const patchResult = await patchUser(1, { username: "수정된 이름" });
  console.log(patchResult);

  // 유저 전체 수정
  const putResult = await putUser(1, {
    username: "수정된 이름",
    email: "수정된 이메일",
    phone: "010-1111-2222",
    address: "수정된 주소",
  });
  console.log(putResult);

  // 유저 삭제
  const deleteResult = await deleteUser({ id: 1 });
  console.log(deleteResult);
}

fetchUsers();
```

### Todos

```ts
import {
  getTodos,
  getTodo,
  createTodo,
  patchTodo,
  putTodo,
  deleteTodo,
} from "korean-dummy-json-fetcher";

async function fetchTodos() {
  // 전체 할 일 목록 가져오기
  const todos = await getTodos();
  console.log(todos);

  // 할 일 목록 페이지네이션
  const todosPage = await getTodos({ page: 1, limit: 10 });
  console.log(todosPage);

  // 특정 유저의 할 일 목록 가져오기
  const todosFilterUserId = await getTodos({ userId: 1 });
  console.log(todosFilterUserId);

  // 특정 할 일 가져오기
  const todo = await getTodo({ id: 1 });
  console.log(todo);

  // 할 일 생성
  const createTodoResult = await createTodo({
    userId: 1,
    content: "새로운 할 일",
    completed: false,
  });
  console.log(createTodoResult);

  // 할 일 일부 수정
  const patchTodoResult = await patchTodo(1, {
    completed: true,
  });
  console.log(patchTodoResult);

  // 할 일 전체 수정
  const putTodoResult = await putTodo(1, {
    content: "수정된 할 일",
    completed: true,
  });
  console.log(putTodoResult);

  // 할 일 삭제
  const deleteTodoResult = await deleteTodo({ id: 1 });
  console.log(deleteTodoResult);
}

fetchTodos();
```

### Posts

```ts
import {
  getPosts,
  getPost,
  createPost,
  patchPost,
  putPost,
  deletePost,
} from "korean-dummy-json-fetcher";

async function fetchPosts() {
  // 전체 게시글 목록 가져오기
  const posts = await getPosts();
  console.log(posts);

  // 게시글 목록 페이지네이션
  const postsPage = await getPosts({ page: 1, limit: 10 });
  console.log(postsPage);

  // 특정 유저 게시물 목록 가져오기
  const userPosts = await getPosts({ userId: 1 });
  console.log(userPosts);

  // 특정 게시글 가져오기
  const post = await getPost({ id: 1 });
  console.log(post);

  // 게시글 생성
  const createPostResult = await createPost({
    userId: 1,
    title: "새 게시글",
    content: "게시글 내용",
    imgUrl: "https://example.com/image.png",
  });
  console.log(createPostResult);

  // 게시글 일부 수정
  const patchPostResult = await patchPost(1, { title: "수정된 게시글" });
  console.log(patchPostResult);

  // 게시글 전체 수정
  const putPostResult = await putPost(1, {
    title: "수정된 게시글",
    content: "수정된 내용",
    imgUrl: "https://resource.com/image.png",
  });
  console.log(putPostResult);

  // 게시글 삭제
  const deletePostResult = await deletePost({ id: 1 });
  console.log(deletePostResult);
}

fetchPosts();
```

### Comments

```ts
import {
  getComments,
  getComment,
  createComment,
  patchComment,
  putComment,
  deleteComment,
} from "korean-dummy-json-fetcher";

async function fetchComments() {
  // 전체 댓글 목록 가져오기
  const comments = await getComments();
  console.log(comments);

  // 댓글 목록 페이지네이션
  const commentsPage = await getComments({ page: 1, limit: 10 });
  console.log(commentsPage);

  // 특정 게시글의 댓글 목록 가져오기
  const commentsFilterPostId = await getComments({ postId: 1 });
  console.log(commentsFilterPostId);

  // 특정 유저의 댓글 목록 가져오기
  const commentsFilterUserId = await getComments({ userId: 1 });
  console.log(commentsFilterUserId);

  // 특정 댓글 가져오기
  const comment = await getComment({ id: 1 });
  console.log(comment);

  // 댓글 생성
  const createCommentResult = await createComment({
    userId: 1,
    postId: 1,
    content: "새로운 댓글",
  });
  console.log(createCommentResult);

  // 댓글 일부 수정
  const patchCommentResult = await patchComment(1, { content: "수정된 댓글" });
  console.log(patchCommentResult);

  // 댓글 전체 수정
  const putCommentResult = await putComment(1, {
    content: "수정된 댓글",
  });
  console.log(putCommentResult);

  // 댓글 삭제
  const deleteCommentResult = await deleteComment({ id: 1 });
  console.log(deleteCommentResult);
}

fetchComments();
```

### Books

```ts
import {
  getBooks,
  getBook,
  createBook,
  patchBook,
  putBook,
  deleteBook,
} from "korean-dummy-json-fetcher";

async function fetchBooks() {
  // 전체 책 목록 가져오기
  const books = await getBooks();
  console.log(books);

  // 책 목록 페이지네이션
  const booksPage = await getBooks({ page: 1, limit: 10 });
  console.log(booksPage);

  // 특정 책 가져오기
  const book = await getBook({ id: 1 });
  console.log(book);

  // 책 추가
  const createBookResult = await createBook({
    author: "저자",
    genre: "소설",
    title: "새로운 책",
    publicationDate: "2024-01-01",
    totalPage: 300,
  });
  console.log(createBookResult);

  // 책 일부 수정
  const patchBookResult = await patchBook(1, { title: "수정된 제목" });
  console.log(patchBookResult);

  // 책 전체 수정
  const putBookResult = await putBook(1, {
    author: "수정된 저자",
    genre: "수정된 장르",
    title: "수정된 제목",
    publicationDate: "2025-01-01",
    totalPage: 100,
  });
  console.log(putBookResult);

  // 책 삭제
  const deleteBookResult = await deleteBook({ id: 1 });
  console.log(deleteBookResult);
}

fetchBooks();
```

### Reviews

```ts
import {
  getReviews,
  getReview,
  createReview,
  patchReview,
  putReview,
  deleteReview,
} from "korean-dummy-json-fetcher";

async function fetchReviews() {
  // 전체 책 리뷰 목록 가져오기
  const reviews = await getReviews();
  console.log(reviews);

  // 책 리뷰 목록 페이지네이션
  const reviewsPage = await getReviews({ page: 1, limit: 10 });
  console.log(reviewsPage);

  // 특정 책 리뷰 목록 가져오기
  const bookReviews = await getReviews({ bookId: 1 });
  console.log(bookReviews);

  // 특정 유저 리뷰 목록 가져오기
  const userReviews = await getReviews({ userId: 1 });
  console.log(userReviews);

  // 특정 리뷰 가져오기
  const review = await getReview({ id: 1 });
  console.log(review);

  // 리뷰 생성
  const createReviewResult = await createReview({
    userId: 1,
    bookId: 1,
    rating: 5,
    content: "새로운 리뷰",
  });
  console.log(createReviewResult);

  // 리뷰 일부 수정
  const patchResult = await patchReview(1, { content: "수정된 리뷰" });
  console.log(patchResult);

  // 리뷰 전체 수정
  const putResult = await putReview(1, {
    rating: 3,
    content: "전체수정 리뷰",
  });
  console.log(putResult);

  // 리뷰 삭제
  const deleteResult = await deleteReview({ id: 1 });
  console.log(deleteResult);
}

fetchReviews();
```

### Auth

```ts
import {
  login,
  getAuthUser,
  refreshAccessToken,
} from "korean-dummy-json-fetcher";

async function fetchAuth() {
  // 로그인
  const { accessToken, refreshToken } = await login({
    id: "test",
    password: "1234",
  });
  console.log(accessToken, refreshToken);

  // 발급받은 accessToken으로 유저 정보 조회
  const user = await getAuthUser({ accessToken });
  console.log(user);

  // 발급받은 refreshToken으로 accessToken 재발급
  const { accessToken: newAccessToken } = await refreshAccessToken({
    refreshToken,
  });
  console.log(newAccessToken);
}

fetchAuth();
```

### Image

```ts
import { getImage } from "korean-dummy-json-fetcher";

// 동적 이미지 데이터 가져오기
const image = getImage({
  size: "300x200",
  text: "안녕하세요",
  bgColor: "007bff",
  textColor: "ffffff",
  ext: "png",
});
console.log(image);
```

### Lorem

```ts
import { getLorem } from "korean-dummy-json-fetcher";

// 한글 로렘 입숨 생성하기
async function fetchLorem() {
  const lorem = await getLorem({
    mode: "p",
    count: 2,
    legnth: 200,
  });
  console.log(lorem);
}

fetchLorem();
```

## API Reference

### Users

- `getUser({ id }: { id: number })` : 특정 유저 정보 반환
- `getUsers({ limit?, page? }?: { limit?: number; page?: number })` : 유저 전체 목록 반환
- `createUser(data: Omit<User, "id" | "createdAt">)` : 유저 생성
- `patchUser(id: number, data: Partial<Omit<User, "id" | "createdAt">>)` : 유저 일부 수정
- `putUser(id: number, data: Omit<User, "id" | "createdAt">)` : 유저 전체 수정
- `deleteUser({ id }: { id: number })` : 유저 삭제

### Todos

- `getTodo({ id }: { id: number })` : 특정 할 일 정보 반환
- `getTodos({ userId?, limit?, page? }?: { userId?: number; limit?: number; page?: number })` : 할 일 목록 반환
- `createTodo(data: Omit<Todo, "id">)` : 할 일 생성
- `patchTodo(id: number, data: Partial<Omit<Todo, "id">>)` : 할 일 일부 수정
- `putTodo(id: number, data: Omit<Todo, "id">)` : 할 일 전체 수정
- `deleteTodo({ id }: { id: number })` : 할 일 삭제

### Posts

- `getPost({ id }: { id: number })` : 특정 게시글 정보 반환
- `getPosts({ userId?, limit?, page? }?: { userId?: number; limit?: number; page?: number })` : 게시글 목록 반환
- `createPost(data: Omit<Post, "id" | "createdAt">)` : 게시글 생성
- `patchPost(id: number, data: Partial<Omit<Post, "id" | "userId" | "createdAt">>)` : 게시글 일부 수정
- `putPost(id: number, data: Omit<Post, "id" | "userId" | "createdAt">)` : 게시글 전체 수정
- `deletePost({ id }: { id: number })` : 게시글 삭제

### Comments

- `getComment({ id }: { id: number })` : 특정 댓글 정보 반환
- `getComments({ userId?, postId?, limit?, page? }?: { userId?: number; postId?: number; limit?: number; page?: number })` : 댓글 목록 반환
- `createComment(data: Omit<Comment, "id" | "createdAt">)` : 댓글 생성
- `patchComment(id: number, data: Partial<Omit<Comment, "id" | "userId" | "postId" | "createdAt">>)` : 댓글 일부 수정
- `putComment(id: number, data: Omit<Comment, "id" | "userId" | "postId" | "createdAt">)` : 댓글 전체 수정
- `deleteComment({ id }: { id: number })` : 댓글 삭제

### Books

- `getBook({ id }: { id: number })` : 특정 책 정보 반환
- `getBooks({ limit?, page? }?: { limit?: number; page?: number })` : 책 목록 반환
- `createBook(data: Omit<Book, "id" | "createdAt">)` : 책 생성
- `patchBook(id: number, data: Partial<Omit<Book, "id" | "createdAt">>)` : 책 일부 수정
- `putBook(id: number, data: Omit<Book, "id" | "createdAt">)` : 책 전체 수정
- `deleteBook({ id }: { id: number })` : 책 삭제

### Reviews

- `getReview({ id }: { id: number })` : 특정 리뷰 반환
- `getReviews({ userId?, bookId?, limit?, page? }?: { userId?: number; bookId?: number; limit?: number; page?: number })` : 리뷰 목록 반환
- `createReview(data: Omit<Review, "id" | "createdAt">)` : 리뷰 생성
- `patchReview(id: number, data: Partial<Omit<Review, "id" | "userId" | "bookId" | "createdAt">>)` : 리뷰 일부 수정
- `putReview(id: number, data: Omit<Review, "id" | "userId" | "bookId" | "createdAt">)` : 리뷰 전체 수정
- `deleteReview({ id }: { id: number })` : 리뷰 삭제

### Auth

- `login({ id, password, ATExp?, RTExp? }: { id: string; password: string; ATExp?: number; RTExp?: number })`: 로그인 후 `accessToken`과 `refreshToken`을 반환
- `getAuthUser({ accessToken }: { accessToken?: string })`: `accessToken`으로 유저 정보를 조회
- `refreshAccessToken({ refreshToken }: { refreshToken?: string })`: `refreshToken`으로 `accessToken`을 재발급

### Image

- `getImage({ size?, bgColor?, text?, ext?, textColor? }?: { size?: string; bgColor?: string; text?: string; ext?: "jpg" | "jpeg" | "png" | "svg"; textColor?: string })`: 동적 이미지 반환

### Lorem

- `getLorem({ mode?, count?, length? }?: { mode?: "p" | "s" | "w"; count?: number; length?: number })`: 한글 로렘 입숨 반환

## Type Definitions Example

```ts
export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
}

export interface Todo {
  id: number;
  userId?: number;
  content: string;
  completed: boolean;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  content: string;
  imgUrl: string;
  createdAt: string;
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  content: string;
  createdAt: string;
}

export interface Book {
  id: number;
  author: string;
  genre: string;
  title: string;
  publicationDate: string;
  totalPage: number;
}

export interface Review {
  id: number;
  userId: number;
  bookId: number;
  rating: number;
  content: string;
  createdAt: string;
}
export interface AuthUser {
  userId: string;
}

export interface Login {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshAccessToken {
  accessToken: string;
}

export interface GetLoremResponse {
  result: string;
}

export type ApiResponse<T = void, K extends string = never> = {
  message: string;
} & {
  [key in K]: T;
};

export type PaginatedResponse<T, K extends string> = {
  message: string;
  page: number;
  limit: number;
  hasNextPage: boolean;
} & {
  [key in K]: T[];
};
```

## License

MIT

## Contact

버그를 발견하셨거나, 개선 및 추가 데이터 제안 등 문의사항이 있다면 아래 이메일로 연락 주세요.

📧 Email: dark9737@gmail.com
