import memoryService from "./memoryService";

const buildPostFetchOptions = (body) => ({
  method: "POST",
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
  }

  return await fetch(url, options);
};

const getUsers = async () => {
  let resp = await performRequest("http://127.0.0.1:3000/admin/users", "GET");
  let data = await resp.json();
  console.log(resp);
  return data;
};

const addBook = async (bookInfo) => {
  let resp = await performRequest("http://127.0.0.1:3000/admin/books", "POST", bookInfo);

  return resp;
};

const updateBook = async (body) => {
  let resp = await fetch("http://127.0.0.1:3000/admin/books", {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
    },
  });

  return resp;
};

const deleteBook = async (body) => {
  let resp = await fetch("http://127.0.0.1:3000/admin/books", {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + memoryService.getLocalValue("JWT_TOKEN"),
    },
  });

  return resp;
};

const adminService = {
  getUsers,
  addBook,
  updateBook,
  deleteBook,
};

export default adminService;

//This should be in adminService ->
//   .get("/users", adminController.getAllUsers) - done
//   .post("/books", adminController.addBook) - working
//   .put("/users", adminController.addAdmin)
//   .put("/books", adminController.updateBook)
//   .delete("/books", adminController.deleteBook)
//   .delete("/users", adminController.deleteUser);
