import axios from "axios";

// const baseUrl = "http://localhost:3000";
export const baseUrl = "https://serverjrskg.vercel.app"

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true
});

export default instance;