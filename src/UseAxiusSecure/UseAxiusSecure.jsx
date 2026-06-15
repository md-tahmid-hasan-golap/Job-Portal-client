import axios from "axios";
const axiusSecure = axios.create({
  baseURL: "https://job-portal-servers-xi.vercel.app/",
});
const UseAxiusSecure = () => {
  return axiusSecure;
};

export default UseAxiusSecure;
