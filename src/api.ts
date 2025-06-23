const BASE_URL = "https://koreandummyjson.site/api";

function buildQuery(params?: Record<string, any>): string {
  if (!params) return "";
  const query = Object.entries(params)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
  return query ? `?${query}` : "";
}

export async function fetcher<T>(
  endpoint: string,
  options?: {
    method?: string;
    params?: Record<string, any>;
    body?: any;
    headers?: Record<string, string>;
  }
): Promise<T> {
  const { method = "GET", params, body, headers } = options || {};
  const url = `${BASE_URL}${endpoint}${buildQuery(params)}`;
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const result = await res.json();
    throw new Error(
      `API 요청 실패: ${res.status} ${res.statusText} - ${result.message}`
    );
  }
  return res.json();
}
