import memoryService from "./memoryService";

// let itemsVersionUUID = -1;
// let startTime = Date.now;

// const backoff = {
//     timeout: 3000,
//     miss: {
//         min: 4, 
//         max: 10, 
//         count: 0,
//     },
//     multiplier: 2000
// }

const buildPostFetchOptions = (body) => ({
    method: "POST",
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + memoryService.getLocalValue("JWT_TOKEN")
    }
});

const buildGetFetchOptions = () => ({
    headers: {
        "Authorization": "Bearer " + memoryService.getLocalValue("JWT_TOKEN")
    }
});

const performRequest = async (url, method, body) => {
    let options = undefined;

    if(method === "GET") {
        options = buildGetFetchOptions();
    } else if (method === "POST") {
        options = buildPostFetchOptions(body);
    }

    return await fetch(url, options);
}

const getUsers = async () => {
    let resp = await performRequest("http://127.0.0.1:3000/admin/users", "GET");
    let data = await resp.json();
    console.log(resp);
    return data;
}

const addBook = async (book) => {
    let resp = await performRequest("http://127.0.0.1:3000/admin/books", "POST", book); 
    let data = await resp.json();

    console.log(data);
}

// const shortPollAddBook = async (book) => {
//     let resp = await performRequest("http://127.0.0.1:3000/admin/books", "POST", book); 
//     let data = resp.json();
//     if (data.version === itemsVersionUUID) {
//         console.log("miss");
//         if(backoff.miss.count <= backoff.miss.max) {
//             backoff.miss.count += 1;
//         }
//         } else {
//         backoff.miss.count = 0; 
//         itemsVersionUUID = data.version;
//         console.log(data);
//         }
    
//     let timeoutMs = backoff.timeout;

//     if (backoff.miss.count > backoff.miss.min) {
//         timeoutMs = timeoutMs + (backoff.miss.count * backoff.multiplier);
//     }

//     console.log((Date.now()) - startTime, "ms");
//     setTimeout(shortPollAddBook, timeoutMs);
//     startTime = Date.now();
    
// }

const adminService = {
    getUsers,
    addBook,
    // shortPollAddBook
};

export default adminService;

//This should be in adminService ->
//   .get("/users", adminController.getAllUsers) - done
//   .post("/books", adminController.addBook) - working
//   .put("/users", adminController.addAdmin)
//   .put("/books", adminController.updateBook)
//   .delete("/books", adminController.deleteBook)
//   .delete("/users", adminController.deleteUser);


