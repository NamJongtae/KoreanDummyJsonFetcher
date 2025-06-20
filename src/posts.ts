import { Post, ApiResponse, PaginatedResponse } from "./types";
import { fetcher } from "./api";

export async function getPost({
  id,
}: {
  id: number;
}): Promise<ApiResponse<Post>> {
  return fetcher<ApiResponse<Post>>(`/posts/${id}`);
}

export async function getPosts(options?: {
  userId?: number;
  limit?: number;
  page?: number;
}): Promise<PaginatedResponse<Post>> {
  return fetcher<PaginatedResponse<Post>>("/posts", { params: options });
}

export async function createPost(data: Post): Promise<ApiResponse<Post>> {
  return fetcher<ApiResponse<Post>>("/posts", {
    method: "POST",
    body: data,
  });
}

export async function patchPost(
  id: number,
  data: Partial<Omit<Post, "id" | "userId">>
): Promise<ApiResponse<Post>> {
  return fetcher<ApiResponse<Post>>(`/posts/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function putPost(
  id: number,
  data: Omit<Post, "id" | "userId">
): Promise<ApiResponse<Post>> {
  return fetcher<ApiResponse<Post>>(`/posts/${id}`, {
    method: "PUT",
    body: data,
  });
}

export async function deletePost(id: number): Promise<ApiResponse<null>> {
  return fetcher<ApiResponse<null>>(`/posts/${id}`, {
    method: "DELETE",
  });
}
