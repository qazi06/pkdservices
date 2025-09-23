import axios from "axios";
const api = axios.create({
  baseURL: "https://cdc-backend.vercel.app/user/signin",
 
});
console.log(api);

export const getLogin = (email : string, password: string) => {
  return api.post(" ", {email, password});
};
