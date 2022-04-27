import { tryCatch } from "@thalesrc/js-utils";

import http from "./http";

export async function login(payload) {
  const [error, result] = await tryCatch(http.post("signin", payload));

  if (error) throw error;

  return result.data.result;
}

export async function register(payload) {
  const [error, result] = await tryCatch(http.put("signup", payload));

  if (error) throw error;

  return result.data.result;
}

export async function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export async function logout() {
  localStorage.removeItem("user");
}
