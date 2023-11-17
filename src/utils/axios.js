import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://127.0.0.1:5000" });

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) =>
		Promise.reject(
			(error.response && error.response.data) || "Something went wrong",
		),
);

export default axiosInstance;
