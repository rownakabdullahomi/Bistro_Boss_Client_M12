import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  //   intercepts 401, 403 status
  axiosSecure.interceptors.response.use(function(response){
    return response;
  }, function(error){
    const status = error.response.status;
    return Promise.reject(status);
  })

  return axiosSecure;
};

export default useAxiosSecure;
