// src/utils/request.ts

import { getToken } from "./auth";

const API_BASE = import.meta.env.VITE_API_URL;

interface RequestOptions extends RequestInit {
  auth?: boolean; // Whether to include token
}

export async function apiRequest<T = any>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const url = `${API_BASE}${endpoint}`;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (options.auth) {
    const token = getToken();
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`API Error: ${response.status} ${message}`);
  }

  return await response.json();
}