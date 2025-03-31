import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'https://localhost:8000/api',
});

export default axiosClient;