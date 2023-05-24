import memoryService from "./memoryService";

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

const addBook = async (bookInfo) => {
    let resp = await performRequest("http://127.0.0.1:3000/admin/books", bookInfo); 

    return resp;
}

const adminService = {
    getUsers,
    addBook
};

export default adminService;
