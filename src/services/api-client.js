import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c61769184b44424cac6d02f379f7a2c6",
  },
});
