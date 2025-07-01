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