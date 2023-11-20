import axios from "axios";
import {getApiPrefixURL} from "./src/utils/env";

const instance = axios.create({
  baseURL: getApiPrefixURL(),
    /*headers: {
      accept: "application/json",
      Authorization: getAccessToken(),
    },*/
});

export default instance;
