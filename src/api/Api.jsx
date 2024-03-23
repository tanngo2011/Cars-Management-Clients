import axios from "axios";

//file api.jsx dùng để dùng để lưu trữ các cấu hình chung cho việc call API




export let axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
  //Cách 1: Cấu hình basic authen bằng thuộc tính auth của axios (tham khảo link: https://stackoverflow.com/questions/44072750/how-to-send-basic-auth-with-axios)
  // auth: {
  //   username: "hoho",
  //   password: "thao123",
  // },
});




//Cách 2: Cấu hình basic authen bằng Bộ đón chặn (nên dùng vì có thể viết được logic trong này):
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent:
    if (localStorage.getItem("loginData")) {
      config.headers["Authorization"] =
        "Basic " +
        btoa(
          JSON.parse(localStorage.getItem("loginData")).username +
            ":" +
            JSON.parse(localStorage.getItem("loginData")).password
        );
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);




export let api = (method_param, endpoint_param, payload_param, page_param) => {
  return axiosClient({
    method: method_param,
    data: payload_param,
    url: endpoint_param,
    params: {
      page: page_param,
    },
  })
    .then((response) => {
      if (payload_param == null) {
        return response.data;
      } else {
        return response;
      }
    })
    .catch((error) => {
      console.log(error);
      if (error.response.status == "500") {
        alert("Car bạn muốn thêm đã có trên hệ thống!!! Vui lòng thử lại!!!");
      } else if (error.response.status == "403") {
        alert(
          "Bạn không thể thực hiện hành động này vì bạn không phải ADMIN!!!"
        );
      } else if (error.response.status == "401") {
      } else if (error.response.status == "400") {
        alert("Dữ liệu không hợp lệ!!! Vui lòng kiểm tra lại!!!");
      } else {
        alert("Đã xảy ra lỗi!!! vui lòng kiểm tra lại!!!");
      }
      return error;
    });
};
