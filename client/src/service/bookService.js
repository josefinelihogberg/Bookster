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

// const shortPollBooks = async () => {
//     let resp = await performRequest("http://127.0.0.1:3000/library/books", "GET");
//     let data = await resp.json();
//     console.log(data);

//     if(data.version === itemsVersionUUID) {
//         console.log("miss");
//         if(backoff.miss.count <= backoff.miss.max) {
//             backoff.miss.count += 1;
//         }
//     } else {
//         backoff.miss.count = 0; 
//         itemsVersionUUID = data.version;
//         console.log(data.content);
//     }
// }

const getBooks = async () => {
    let resp = await performRequest("http://127.0.0.1:3000/library/books", "GET");
    let data = await resp.json();
    console.log(resp);
    return data;
}

const bookService = {
    getBooks
};

export default bookService;
