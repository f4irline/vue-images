import axios from "axios";
import qs from "qs";

const CLIENT_ID = "0cbbefb0da00e20";
// const CLIENT_SECRET = "5f4dc1c68efcef993bb7db2e19981b03976dd6b8";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token",
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
  },
  fetchImages(token) {
    return axios.get('https://api.imgur.com/3/account/me/images', {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    });
  }
}