import { Todo, ApiResponse, PaginatedResponse } from "./types";
import { fetcher } from "./api";

export async function getTodo({
  id,
}: {
  id: number;
}): Promise<ApiResponse<Todo, "todo">> {
  return fetcher<ApiResponse<Todo, "todo">>(`/todos/${id}`);
}

export async function getTodos(options?: {
  userId?: number;
  limit?: number;
  page?: number;
}): Promise<PaginatedResponse<Todo, "todos">> {
  return fetcher<PaginatedResponse<Todo, "todos">>("/todos", {
    params: options,
  });
}

export async function createTodo(
  data: Omit<Todo, "id">
): Promise<ApiResponse<Todo, "todo">> {
  return fetcher<ApiResponse<Todo, "todo">>("/todos", {
    method: "POST",
    body: data,
  });
}

export async function patchTodo(
  id: number,
  data: Partial<Omit<Todo, "id">>
): Promise<ApiResponse<Todo, "todo">> {
  return fetcher<ApiResponse<Todo, "todo">>(`/todos/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function putTodo(
  id: number,
  data: Omit<Todo, "id">
): Promise<ApiResponse<Todo, "todo">> {
  return fetcher<ApiResponse<Todo, "todo">>(`/todos/${id}`, {
    method: "PUT",
    body: data,
  });
}

export async function deleteTodo(
  id: number
): Promise<{ message: string }> {
  return fetcher<{ message: string }>(`/todos/${id}`, {
    method: "DELETE",
  });
}
