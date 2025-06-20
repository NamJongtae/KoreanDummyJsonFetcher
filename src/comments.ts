import { Comment, ApiResponse, PaginatedResponse } from "./types";
import { fetcher } from "./api";

export async function getComment({
  id,
}: {
  id: number;
}): Promise<ApiResponse<Comment>> {
  return fetcher<ApiResponse<Comment>>(`/comments/${id}`);
}

export async function getComments(options?: {
  userId?: number;
  postId?: number;
  limit?: number;
  page?: number;
}): Promise<PaginatedResponse<Comment>> {
  return fetcher<PaginatedResponse<Comment>>("/comments", { params: options });
}

export async function createComment(
  data: Comment
): Promise<ApiResponse<Comment>> {
  return fetcher<ApiResponse<Comment>>("/comments", {
    method: "POST",
    body: data,
  });
}

export async function patchComment(
  id: number,
  data: Partial<Omit<Comment, "id" | "userId" | "postId">>
): Promise<ApiResponse<Comment>> {
  return fetcher<ApiResponse<Comment>>(`/comments/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function putComment(
  id: number,
  data: Omit<Comment, "id" | "userId" | "postId">
): Promise<ApiResponse<Comment>> {
  return fetcher<ApiResponse<Comment>>(`/comments/${id}`, {
    method: "PUT",
    body: data,
  });
}

export async function deleteComment(id: number): Promise<ApiResponse<null>> {
  return fetcher<ApiResponse<null>>(`/comments/${id}`, {
    method: "DELETE",
  });
}
