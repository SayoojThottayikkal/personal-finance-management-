import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.authorization = token;
  }
  return req;
});

export const registerUser = async (userData) => {
  const res = await API.post("/users/register", userData);
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await API.post("/users/login", userData);
  return res.data;
};

export const addTransaction = async (transactionData) => {
  const res = await API.post("/transactions", transactionData);
  return res.data;
};

export const getTransactions = async () => {
  const res = await API.get("/transactions");
  return res.data;
};

export const updateTransaction = async (id, updatedData) => {
  const res = await API.put(`/transactions/${id}`, updatedData);
  return res.data;
};

export const deleteTransaction = async (id) => {
  const res = await API.delete(`/transactions/${id}`);
  return res.data;
};
