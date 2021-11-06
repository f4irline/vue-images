import qs from "qs";

const CLIENT_ID = "4c005364a37aeec";
// const CLIENT_SECRET = "5b061f824d9a6bef095c0cf44256bb66b5b77eca";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token",
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
  }
}