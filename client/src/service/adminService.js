import memoryService from "./memoryService";

const buildPostFetchOptions = (body) => ({
  method: "POST",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const buildDeleteFetchOption = (body) => ({
  method: "DELETE",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const buildPatchFetchOption = (body) => ({
  method: "PATCH",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const buildPutFetchOption = (body) => ({
  method: "PUT",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const buildGetFetchOptions = () => ({
  headers: {
    "Authorization": "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
  },
});

const performRequest = async (url, method, body) => {
  let options = undefined;
  if (method === "GET") {
    options = buildGetFetchOptions();
  } else if (method === "POST") {
    options = buildPostFetchOptions(body);
  } else if (method === "DELETE") {
    options = buildDeleteFetchOption(body);
  } else if (method === "PATCH") {
    options = buildPatchFetchOption(body);
  } else if (method === "PUT") {
    options = buildPutFetchOption(body);
  }

  return await fetch(url, options);
};

const getUsers = async () => {
  let resp = await performRequest("http://127.0.0.1:3000/admin/users", "GET");
  let data = await resp.json();
  console.log(resp);
  console.log(data);
  return data;
};

const promoteUser = async (username) => {
  let resp = await performRequest("http://127.0.0.1:3000/admin/users", "PUT", username);
  let data = await resp.json();

  console.log(data);
};

const deleteUser = async (username) => {
  let resp = await performRequest("http://127.0.0.1:3000/admin/users", "DELETE", username);
  let data = await resp.json();

  console.log(data);
};

const addBook = async (book) => {
  let resp = await performRequest("http://127.0.0.1:3000/admin/books", "POST", book);
  let data = await resp.json();

  console.log(data);
};

const updateBook = async (book) => {
  console.log(book);
  let resp = await performRequest("http://127.0.0.1:3000/admin/books", "PUT", book);
  let data = await resp.text();

  console.log(data);
};

const deleteBook = async (title) => {
  console.log(title);
  let resp = await performRequest("http://127.0.0.1:3000/admin/books", "DELETE", title);
  let data = await resp.json();

  console.log(data);
};

const adminService = {
  getUsers,
  addBook,
  updateBook,
  deleteBook,
  promoteUser,
  deleteUser,
};

export default adminService;
