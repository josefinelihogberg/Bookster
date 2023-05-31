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

    if (method === "GET") {
        options = buildGetFetchOptions();
    } else if (method === "POST") {
        options = buildPostFetchOptions(body);
    }

    return await fetch(url, options);
}

const getBooks = async () => {
    let resp = await performRequest("http://127.0.0.1:3000/library/books", "GET");
    let data = await resp.json();
    return data;
}

const buyBook = async (bookInfo) => {
    let resp = await performRequest("http://127.0.0.1:3000/library/user/books", "POST", bookInfo);
    let data = await resp.json();
    return data;
};

async function searchBook(query) {
    let resp = await performRequest(`http://127.0.0.1:3000/library/books/search?q=${query}`);
    let data = await resp.json();
    return data;
}

const bookService = {
    getBooks,
    buyBook,
    searchBook
};

export default bookService;
