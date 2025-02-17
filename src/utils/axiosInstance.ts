import axios from "axios";

const baseUrl = "http://localhost:3000";
// const baseUrl = "http://192.168.1.76:3000";

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true
});

export default instance;