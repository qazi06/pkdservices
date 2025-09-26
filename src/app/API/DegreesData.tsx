import axios from "axios";
const api = axios.create({
  baseURL: "https://cdc-backend.vercel.app/degrees"
});
console.log(api);

export const getDegrees = () => {
  return api.get(" ");
};