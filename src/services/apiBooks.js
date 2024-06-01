import axios from "axios";
import { useState } from "react";

// export async function getBook({ query }) {
export async function getBook() {
  const apiKey = import.meta.env.VITE_API_KEY;

  // const res = await fetch(
  //   `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${apiKey}`
  //   // { signal }
  // );
  // if (!res.ok) throw new Error("Something went wrong");

  // const data = await res.json();
  // return axios
  //   .get(
  //     // `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${apiKey}`
  //     `https://www.googleapis.com/books/v1/volumes?q=malcolmx:keyes&key=${apiKey}`
  //   )
  //   .then((res) => res.data)
  //   .catch((err) => {
  //     throw new Error(err.message);
  //   });
}
