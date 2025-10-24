import { QueryClient } from "@tanstack/react-query";

async function throwResponseError(response: Response): Promise<never> {
  let message;
  try {
    const body = await response.json();
    message = body.message;
  } catch (error) {
    message = response.statusText || `Request failed with status ${response.status}`;
  }
  const error = new Error(message);
  (error as any).status = response.status;
  throw error;
}

async function fetchWithErrorHandling(url: string, options?: RequestInit) {
  const response = await fetch(url, options);
  if (!response.ok) {
    await throwResponseError(response);
  }
  return response.json();
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const url = queryKey[0] as string;
        return fetchWithErrorHandling(url);
      },
      staleTime: Infinity,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export async function apiRequest(
  url: string,
  options?: RequestInit,
) {
  return fetchWithErrorHandling(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
}
