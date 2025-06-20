import { fetcher } from "./api";

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
}): Promise<{
  message: string;
  accessToken: string;
  refreshToken: string;
}> {
  return fetcher("/auth/login", {
    method: "POST",
    body: { id, password, ATExp, RTExp },
  });
}

export async function getAuthUser({
  accessToken,
}: {
  accessToken: string;
}): Promise<{
  message: string;
  userId: string;
}> {
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
}): Promise<{
  accessToken: string;
}> {
  return fetcher("/auth/refresh", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
}
