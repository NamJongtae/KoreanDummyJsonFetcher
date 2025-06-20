import { Book, ApiResponse, PaginatedResponse } from "./types";
import { fetcher } from "./api";

export async function getBook({
  id,
}: {
  id: number;
}): Promise<ApiResponse<Book>> {
  return fetcher<ApiResponse<Book>>(`/books/${id}`);
}

export async function getBooks(options?: {
  limit?: number;
  page?: number;
}): Promise<PaginatedResponse<Book>> {
  return fetcher<PaginatedResponse<Book>>("/books", { params: options });
}

export async function createBook(data: Book): Promise<ApiResponse<Book>> {
  return fetcher<ApiResponse<Book>>("/books", {
    method: "POST",
    body: data,
  });
}

export async function patchBook(
  id: number,
  data: Partial<Omit<Book, "id">>
): Promise<ApiResponse<Book>> {
  return fetcher<ApiResponse<Book>>(`/books/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function putBook(
  id: number,
  data: Omit<Book, "id">
): Promise<ApiResponse<Book>> {
  return fetcher<ApiResponse<Book>>(`/books/${id}`, {
    method: "PUT",
    body: data,
  });
}

export async function deleteBook(id: number): Promise<ApiResponse<null>> {
  return fetcher<ApiResponse<null>>(`/books/${id}`, {
    method: "DELETE",
  });
}
