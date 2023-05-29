import memoryService from "./memoryService.js";

/* helper function (not exported), used to parse local jwt token from localStorage */
function getLocalJWTData() {
  const localJWTToken = memoryService.getLocalValue("JWT_TOKEN");
  const tokenParts = localJWTToken.split("."); // 0 - jwt header, 1 - payload, 2 - signatur
  const payload = tokenParts[1];

  let payloadData = window.atob(payload);
  return JSON.parse(payloadData);
}

function getUsername() {
  return getLocalJWTData().username;
}

function getUserRole() {
  return getLocalJWTData().role;
}

const buildGetFetchOptions = () => ({
  headers: {
    "Authorization": "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const performRequest = async (url, method, body) => {
  let options = undefined;

  if (method === "GET") {
    options = buildGetFetchOptions();
  }

  return await fetch(url, options);
};
const getUsers = async () => {
  let resp = await performRequest("http://127.0.0.1:3000/library/profile", "GET");
  let data = await resp.json();
  return data;
};

const userService = {
  getUsername,
  getUserRole,
  getUsers
};
export default userService;
