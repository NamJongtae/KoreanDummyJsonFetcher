import { Review, ApiResponse, PaginatedResponse } from "./types";
import { fetcher } from "./api";

export async function getReview({
  id,
}: {
  id: number;
}): Promise<ApiResponse<Review>> {
  return fetcher<ApiResponse<Review>>(`/reviews/${id}`);
}

export async function getReviews(options?: {
  bookId?: number;
  userId?: number;
  limit?: number;
  page?: number;
}): Promise<PaginatedResponse<Review>> {
  return fetcher<PaginatedResponse<Review>>("/reviews", { params: options });
}

export async function createReview(data: Review): Promise<ApiResponse<Review>> {
  return fetcher<ApiResponse<Review>>("/reviews", {
    method: "POST",
    body: data,
  });
}

export async function patchReview(
  id: number,
  data: Partial<Omit<Review, "id" | "userId" | "bookId">>
): Promise<ApiResponse<Review>> {
  return fetcher<ApiResponse<Review>>(`/reviews/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function putReview(
  id: number,
  data: Omit<Review, "id" | "userId" | "bookId">
): Promise<ApiResponse<Review>> {
  return fetcher<ApiResponse<Review>>(`/reviews/${id}`, {
    method: "PUT",
    body: data,
  });
}

export async function deleteReview(id: number): Promise<ApiResponse<null>> {
  return fetcher<ApiResponse<null>>(`/reviews/${id}`, {
    method: "DELETE",
  });
}
