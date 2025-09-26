import axios from "axios";
const api = axios.create({
  baseURL: "https://cdc-backend.vercel.app/colleges"
});
console.log(api);

export const getColleges = () => {
  return api.get(" ");
};
