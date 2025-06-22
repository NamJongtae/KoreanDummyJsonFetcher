import { Post, ApiResponse, PaginatedResponse } from "./types";
import { fetcher } from "./api";

export async function getPost({
  id,
}: {
  id: number;
}): Promise<ApiResponse<Post, "post">> {
  return fetcher<ApiResponse<Post, "post">>(`/posts/${id}`);
}

export async function getPosts(options?: {
  userId?: number;
  limit?: number;
  page?: number;
}): Promise<PaginatedResponse<Post, "posts">> {
  return fetcher<PaginatedResponse<Post, "posts">>("/posts", { params: options });
}

export async function createPost(
  data: Omit<Post, "id" | "createdAt">
): Promise<ApiResponse<Post, "post">> {
  return fetcher<ApiResponse<Post, "post">>("/posts", {
    method: "POST",
    body: data,
  });
}

export async function patchPost(
  id: number,
  data: Partial<Omit<Post, "id" | "userId" | "createdAt">>
): Promise<ApiResponse<Post, "post">> {
  return fetcher<ApiResponse<Post, "post">>(`/posts/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function putPost(
  id: number,
  data: Omit<Post, "id" | "userId" | "createdAt">
): Promise<ApiResponse<Post, "post">> {
  return fetcher<ApiResponse<Post, "post">>(`/posts/${id}`, {
    method: "PUT",
    body: data,
  });
}

export async function deletePost({ id }: { id: number }): Promise<ApiResponse> {
  return fetcher<ApiResponse>(`/posts/${id}`, {
    method: "DELETE",
  });
}
