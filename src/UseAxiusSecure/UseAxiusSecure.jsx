import axios from "axios";
const axiusSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const UseAxiusSecure = () => {
  return axiusSecure;
};

export default UseAxiusSecure;
