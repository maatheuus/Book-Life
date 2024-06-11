import axios from "axios";

export async function searchBook(query, page, filter, sortBy) {
  const apiKey = import.meta.env.VITE_API_KEY;

  let url = "https://www.googleapis.com/books/v1/volumes".replace(/ /, "%20");
  let urlApi = `&key=${apiKey}`;

  if (query) {
    url += `?q=${query}`;
  }

  if (page) {
    url += `&startIndex=${page}`;
  }

  if (filter) {
    url += `&filter=${filter}`;
  }

  if (sortBy) {
    url += `&orderBy=${sortBy}`;
  }

  return axios
    .get(url + urlApi)
    .then((res) => {
      if (res.status !== 200)
        throw new Error("Could not fetch the data, please try again!");
      return res.data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}

export async function postBookmarked(data) {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_URL}/bookmarked`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data.status !== "success")
      throw new Error("Something went wrong, try again later!");
    // console.log(res);

    return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
