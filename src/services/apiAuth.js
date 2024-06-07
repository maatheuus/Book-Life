import axios from "axios";

const url = "http://localhost:3000/api/v1/users";

export const signUp = async (data) => {
  try {
    const res = await axios.post(`${url}/signup`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status !== "success" || res.status !== 201)
      throw new Error("Something went wrong, try again later!");

    return res.data;
  } catch (error) {
    console.error("Erro ao adicionar dados:", error);
    throw new Error(error.message);
  }
};

export const login = async (data) => {
  try {
    const res = await axios.post(`${url}/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status !== "success" || res.status !== 200)
      throw new Error("Something went wrong, try again later!");

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = async (data) => {
  try {
    console.log("getcurrentuser", data);
    // const res = await axios.get(`${url}/user`, data);
    // if (res.data.status !== "success" || res.status !== 200)
    //   throw new Error("Something went wrong, try again later!");
    // return await res.data;
  } catch (error) {
    // console.error("Erro ao encontrar o usuário:", error);
    throw new Error(error.message);
  }
};
