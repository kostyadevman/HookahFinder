import axios from "axios";
//https://jsonplaceholder.typicode.com/posts
export default axios.create({
  // baseURL: "https://randomuser.me/api/",
    eURL: "https://jsonplaceholder.typicode.com/posts",
  responseType: "json"
});
