export interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
}

export async function apiFetch<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const { method = "GET", headers = {}, body } = options;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${url}`,
    {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...(body && { body: JSON.stringify(body) }),
    }
  );
  console.log("response", response);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }

  return response.json();
}
