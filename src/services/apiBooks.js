export async function getBook(query) {
  try {
    if (query === undefined) return;

    const apiKey = import.meta.env.VITE_API_KEY;
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${apiKey}`
    );

    if (!data.status) throw new Error("Something went wrong");

    const res = await data.json();

    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}
