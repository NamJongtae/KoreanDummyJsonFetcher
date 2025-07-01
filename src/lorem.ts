import { fetcher } from "./api";
import { GetLoremResponse } from "./types";

export interface GetLoremOptions {
  mode?: "p" | "s" | "w";
  count?: number;
  length?: number;
}

export async function getLorem(
  options?: GetLoremOptions
): Promise<GetLoremResponse> {
  return fetcher<GetLoremResponse>("/lorem", {
    params: options,
  });
}
