export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  }
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}
