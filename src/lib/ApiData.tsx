import axios from "axios";
const api = axios.create({
  baseURL: "https://cdc-backend.vercel.app/colleges"
});
console.log(api);

export const getUser = () => {
  return api.get(" ");
};
