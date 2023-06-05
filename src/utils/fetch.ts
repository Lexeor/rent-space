import { mockMenuItems } from "./mock-data";
import { urlGetMenuItems } from "./apiUrls";

// Manual get of menuItems
export async function getMenuItems(isReal = true) {
  if (isReal) {
    const response = await fetch(urlGetMenuItems, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log("error");
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    return data;
  } else {
    return mockMenuItems;
  }
}

// Internal HTTP fetch wrapper function
async function http<T>(path: string, config: RequestInit): Promise<T> {
  const request = new Request(path, config);
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(
      `Error: ${response.status}, message: ${response.statusText}`
    );
  }

  // May error if there is no body, return empty array
  return response.json().catch(() => ({}));
}

export async function get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = { method: "get", ...config };
  return await http<T>(path, init);
}

export async function post<T, U>(
  path: string,
  body: T,
  config?: RequestInit
): Promise<U> {
  const init = { method: "post", body: JSON.stringify(body), ...config };
  return await http<U>(path, init);
}

export async function put<T, U>(
  path: string,
  body: T,
  config?: RequestInit
): Promise<U> {
  const init = { method: "put", body: JSON.stringify(body), ...config };
  return await http<U>(path, init);
}
