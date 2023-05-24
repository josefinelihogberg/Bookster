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

const userService = {
  getUsername,
  getUserRole
};
export default userService;
