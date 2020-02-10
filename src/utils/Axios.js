import axios from "axios";

export const Axios= axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 1000,
});