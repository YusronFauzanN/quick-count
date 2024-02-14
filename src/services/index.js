import axios from "axios";

const apiInstance = axios.create({
  baseURL: `http://quickcount-api.klinikpajajaran.com/api/`,
});

export default apiInstance;