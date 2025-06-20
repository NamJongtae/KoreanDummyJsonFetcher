import { fetcher } from "./api";
import { ApiResponse, AuthUser, Login, RefreshAccessToken } from "./types";

export async function login({
  id,
  password,
  ATExp = 3600,
  RTExp = 86400,
}: {
  id: string;
  password: string;
  ATExp?: number;
  RTExp?: number;
}): Promise<ApiResponse<Login, "accessToken" | "refreshToken">> {
  return fetcher("/auth/login", {
    method: "POST",
    body: { id, password, ATExp, RTExp },
  });
}

export async function getAuthUser({
  accessToken,
}: {
  accessToken: string;
}): Promise<ApiResponse<AuthUser, "user">> {
  return fetcher("/auth/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

export async function refreshAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}): Promise<ApiResponse<RefreshAccessToken, "accessToken">> {
  return fetcher("/auth/refresh", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
}
