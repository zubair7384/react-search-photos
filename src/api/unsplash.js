import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 6kaT1FAGK1M9K1ElRDScTeD4SikxRWezpTyPGnJSoiU",
  },
});
