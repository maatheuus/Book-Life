import axios from "axios";

const URL = import.meta.env.VITE_URL;

export const signUp = async (data) => {
  try {
    const res = await axios.post(`${URL}/signup`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status !== "success")
      throw new Error("Something went wrong, try again later!");

    return res.data;
  } catch (error) {
    console.error("Erro ao adicionar dados:", error);
    throw new Error(error.message);
  }
};

export const login = async (data) => {
  try {
    const res = await axios.post(`${URL}/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status !== "success")
      throw new Error("Something went wrong, try again later!");

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    return await axios.get(`${URL}/logout`);
  } catch (error) {
    // console.log(error);
    throw new Error(error.message);
  }
};
