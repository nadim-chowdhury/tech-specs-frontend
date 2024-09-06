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

  // Adding no-cache headers
  const noCacheHeaders = {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${url}`,
    {
      method,
      headers: {
        "Content-Type": "application/json",
        ...noCacheHeaders, // Add no-cache headers here
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
