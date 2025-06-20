import { Todo, ApiResponse, PaginatedResponse } from "./types";
import { fetcher } from "./api";

export async function getTodo({
  id,
}: {
  id: number;
}): Promise<ApiResponse<Todo>> {
  return fetcher<ApiResponse<Todo>>(`/todos/${id}`);
}

export async function getTodos(options?: {
  userId?: number;
  limit?: number;
  page?: number;
}): Promise<PaginatedResponse<Todo>> {
  return fetcher<PaginatedResponse<Todo>>("/todos", { params: options });
}

export async function createTodo(
  data: Omit<Todo, "id">
): Promise<ApiResponse<Todo>> {
  return fetcher<ApiResponse<Todo>>("/todos", {
    method: "POST",
    body: data,
  });
}

export async function patchTodo(
  id: number,
  data: Partial<Omit<Todo, "id">>
): Promise<ApiResponse<Todo>> {
  return fetcher<ApiResponse<Todo>>(`/todos/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function putTodo(
  id: number,
  data: Omit<Todo, "id">
): Promise<ApiResponse<Todo>> {
  return fetcher<ApiResponse<Todo>>(`/todos/${id}`, {
    method: "PUT",
    body: data,
  });
}

export async function deleteTodo(id: number): Promise<ApiResponse<null>> {
  return fetcher<ApiResponse<null>>(`/todos/${id}`, {
    method: "DELETE",
  });
}
