import { Comment, ApiResponse, PaginatedResponse } from "./types";
import { fetcher } from "./api";

export async function getComment({
  id,
}: {
  id: number;
}): Promise<ApiResponse<Comment, "comment">> {
  return fetcher<ApiResponse<Comment, "comment">>(`/comments/${id}`);
}

export async function getComments(options?: {
  userId?: number;
  postId?: number;
  limit?: number;
  page?: number;
}): Promise<PaginatedResponse<Comment, "comments">> {
  return fetcher<PaginatedResponse<Comment, "comments">>("/comments", { params: options });
}

export async function createComment(
  data: Omit<Comment, "id" | "createdAt">
): Promise<ApiResponse<Comment, "comment">> {
  return fetcher<ApiResponse<Comment, "comment">>("/comments", {
    method: "POST",
    body: data,
  });
}

export async function patchComment(
  id: number,
  data: Partial<Omit<Comment, "id" | "userId" | "postId" | "createdAt">>
): Promise<ApiResponse<Comment, "comment">> {
  return fetcher<ApiResponse<Comment, "comment">>(`/comments/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function putComment(
  id: number,
  data: Omit<Comment, "id" | "userId" | "postId" | "createdAt">
): Promise<ApiResponse<Comment, "comment">> {
  return fetcher<ApiResponse<Comment, "comment">>(`/comments/${id}`, {
    method: "PUT",
    body: data,
  });
}

export async function deleteComment(id: number): Promise<{ message: string }> {
  return fetcher<{ message: string }>(`/comments/${id}`, {
    method: "DELETE",
  });
}
