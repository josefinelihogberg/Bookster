const buildFetchOptions = (body) => ({
  method: "POST",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
  },
});

const performRequest = async (url, body) => {
  const options = buildFetchOptions(body);
  let resp = await fetch(url, options);

  return resp;
};

async function searchBook(query) {
  let resp = await performRequest("http://127.0.0.1:3000/library/books/search", query);
  return resp;
}

const bookService = { searchBook };
export default bookService;
