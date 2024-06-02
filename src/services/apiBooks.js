import axios from "axios";

export async function searchBook(query, page) {
  const apiKey = import.meta.env.VITE_API_KEY;
  //www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/3/volumes?startIndex=10&maxResults=20&key=yourAPIKey
  console.log(page);
  let url = "https://www.googleapis.com/books/v1/volumes";
  if (query) {
    url += `?q=${query}:keyes&key=${apiKey}`;
  }
  if (page) {
    url += `?startIndex={index}&maxResults={max}&key==${apiKey}`;
  }

  return axios
    .get(url)
    .then((res) => {
      if (res.status !== 200)
        throw new Error("Could not fetch the data, please try again!");
      return res.data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}
