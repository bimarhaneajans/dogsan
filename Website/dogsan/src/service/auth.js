/* import { tryCatch } from "@thalesrc/js-utils";

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
} */
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
