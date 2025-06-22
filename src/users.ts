import { User, ApiResponse, PaginatedResponse } from "./types";
import { fetcher } from "./api";

export async function getUser({
  id,
}: {
  id: number;
}): Promise<ApiResponse<User, "user">> {
  return fetcher<ApiResponse<User, "user">>(`/users/${id}`);
}

export async function getUsers(options?: {
  limit?: number;
  page?: number;
}): Promise<PaginatedResponse<User, "users">> {
  return fetcher<PaginatedResponse<User, "users">>("/users", {
    params: options,
  });
}

export async function createUser(
  data: Omit<User, "id" | "createdAt">
): Promise<ApiResponse<User, "user">> {
  return fetcher<ApiResponse<User, "user">>("/users", {
    method: "POST",
    body: data,
  });
}

export async function patchUser(
  id: number,
  data: Partial<Omit<User, "id" | "createdAt">>
): Promise<ApiResponse<User, "user">> {
  return fetcher<ApiResponse<User, "user">>(`/users/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function putUser(
  id: number,
  data: Omit<User, "id" | "createdAt">
): Promise<ApiResponse<User, "user">> {
  return fetcher<ApiResponse<User, "user">>(`/users/${id}`, {
    method: "PUT",
    body: data,
  });
}

export async function deleteUser({ id }: { id: number }): Promise<ApiResponse> {
  return fetcher<ApiResponse>(`/users/${id}`, {
    method: "DELETE",
  });
}
