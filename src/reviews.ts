import { Review, ApiResponse, PaginatedResponse } from "./types";
import { fetcher } from "./api";

export async function getReview({
  id,
}: {
  id: number;
}): Promise<ApiResponse<Review, "review">> {
  return fetcher<ApiResponse<Review, "review">>(`/reviews/${id}`);
}

export async function getReviews(options?: {
  bookId?: number;
  userId?: number;
  limit?: number;
  page?: number;
}): Promise<PaginatedResponse<Review, "reviews">> {
  return fetcher<PaginatedResponse<Review, "reviews">>("/reviews", { params: options });
}

export async function createReview(
  data: Omit<Review, "id" | "createdAt">
): Promise<ApiResponse<Review, "review">> {
  return fetcher<ApiResponse<Review, "review">>("/reviews", {
    method: "POST",
    body: data,
  });
}

export async function patchReview(
  id: number,
  data: Partial<Omit<Review, "id" | "userId" | "bookId" | "createdAt">>
): Promise<ApiResponse<Review, "review">> {
  return fetcher<ApiResponse<Review, "review">>(`/reviews/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function putReview(
  id: number,
  data: Omit<Review, "id" | "userId" | "bookId" | "createdAt">
): Promise<ApiResponse<Review, "review">> {
  return fetcher<ApiResponse<Review, "review">>(`/reviews/${id}`, {
    method: "PUT",
    body: data,
  });
}

export async function deleteReview(id: number): Promise<{ message: string }> {
  return fetcher<{ message: string }>(`/reviews/${id}`, {
    method: "DELETE",
  });
}
