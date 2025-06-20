import { User, ApiResponse, PaginatedResponse } from "./types";
import { fetcher } from "./api";

export async function getUser({
  id,
}: {
  id: number;
}): Promise<ApiResponse<User>> {
  return fetcher<ApiResponse<User>>(`/users/${id}`);
}

export async function getUsers(options?: {
  limit?: number;
  page?: number;
}): Promise<PaginatedResponse<User>> {
  return fetcher<PaginatedResponse<User>>("/users", { params: options });
}

export async function createUser(
  data: Omit<User, "id" | "createdAt">
): Promise<ApiResponse<User>> {
  return fetcher<ApiResponse<User>>("/users", {
    method: "POST",
    body: data,
  });
}

export async function patchUser(
  id: number,
  data: Partial<Omit<User, "id" | "createdAt">>
): Promise<ApiResponse<User>> {
  return fetcher<ApiResponse<User>>(`/users/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function putUser(
  id: number,
  data: Omit<User, "id" | "createdAt">
): Promise<ApiResponse<User>> {
  return fetcher<ApiResponse<User>>(`/users/${id}`, {
    method: "PUT",
    body: data,
  });
}

export async function deleteUser(id: number): Promise<ApiResponse<null>> {
  return fetcher<ApiResponse<null>>(`/users/${id}`, {
    method: "DELETE",
  });
}
