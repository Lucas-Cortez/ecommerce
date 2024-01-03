type JsonClientOptions = Omit<RequestInit, "method" | "body"> & {
  body?: Record<string, any>;
};

class JsonClient {
  private static async jsonFetch<T>(...args: Parameters<typeof fetch>) {
    const response = await fetch(...args);
    const data = await response.json();
    return data as T;
  }

  static async get<T = any>(url: string, options?: JsonClientOptions) {
    const data = await this.jsonFetch<T>(url, { method: "GET", ...options, body: undefined });
    return data;
  }

  static async post<T = any>(url: string, options?: JsonClientOptions) {
    const data = await this.jsonFetch<T>(url, {
      method: "POST",
      ...options,
      body: options && JSON.stringify(options?.body),
    });
    return data;
  }

  static async delete<T = any>(url: string, options?: JsonClientOptions) {
    const data = await this.jsonFetch<T>(url, {
      method: "DELETE",
      ...options,
      body: undefined,
    });
    return data;
  }

  static async put<T = any>(url: string, options?: JsonClientOptions) {
    const data = await this.jsonFetch<T>(url, {
      method: "PUT",
      ...options,
      body: options && JSON.stringify(options?.body),
    });
    return data;
  }
}

export const jsonApi = JsonClient;
