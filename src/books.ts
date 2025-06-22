import { Book, ApiResponse, PaginatedResponse } from "./types";
import { fetcher } from "./api";

export async function getBook({
  id,
}: {
  id: number;
}): Promise<ApiResponse<Book, "book">> {
  return fetcher<ApiResponse<Book, "book">>(`/books/${id}`);
}

export async function getBooks(options?: {
  limit?: number;
  page?: number;
}): Promise<PaginatedResponse<Book, "books">> {
  return fetcher<PaginatedResponse<Book, "books">>("/books", { params: options });
}

export async function createBook(
  data: Omit<Book, "id" | "createdAt">
): Promise<ApiResponse<Book, "book">> {
  return fetcher<ApiResponse<Book, "book">>("/books", {
    method: "POST",
    body: data,
  });
}

export async function patchBook(
  id: number,
  data: Partial<Omit<Book, "id" | "createdAt">>
): Promise<ApiResponse<Book, "book">> {
  return fetcher<ApiResponse<Book, "book">>(`/books/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function putBook(
  id: number,
  data: Omit<Book, "id" | "createdAt">
): Promise<ApiResponse<Book, "book">> {
  return fetcher<ApiResponse<Book, "book">>(`/books/${id}`, {
    method: "PUT",
    body: data,
  });
}

export async function deleteBook({ id }: { id: number }): Promise<ApiResponse> {
  return fetcher<ApiResponse>(`/books/${id}`, {
    method: "DELETE",
  });
}
