export function getImage(options?: {
  size?: string;
  bgColor?: string;
  text?: string;
  ext?: "jpg" | "jpeg" | "png" | "svg";
  textColor?: string;
}): string {
  const baseUrl = "https://koreandummyjson.site/api/image";
  const params = new URLSearchParams();
  if (options?.size) params.append("size", options.size);
  if (options?.bgColor) params.append("bgColor", options.bgColor);
  if (options?.text) params.append("text", options.text);
  if (options?.ext) params.append("ext", options.ext);
  if (options?.textColor) params.append("textColor", options.textColor);
  const qs = params.toString();
  return qs ? `${baseUrl}?${qs}` : baseUrl;
}
