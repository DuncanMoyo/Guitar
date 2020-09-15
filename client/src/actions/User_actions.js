import axios from "axios";

import { USER_SERVER } from "../components/utils/Misc";
import {LOGIN_USER} from './Types'

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: request
  }
}
