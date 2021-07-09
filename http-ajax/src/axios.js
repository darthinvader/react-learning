import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";
// Instance interceptors work!!!!!
// instance.interceptors.requests

export default instance;
