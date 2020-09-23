export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "5cbb2885fee44efc8cf60dca8380c6d8";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});

  // explanation this function  👇

  /*
       1 window.location.hash => "#access_token=BQDU7MpROitFFMlDPJPxNV2lVbe-iha8R_4e2recBzm90OwkhGKUAWLa1p8CU4xVkGIEIxVFb9XQxuYSKsy8g8FOItqrkCMKn8xosSwXmLCseig-rvW2piqVfIA17cqppJdY2kk8bNoZ6gLJBNkITJ5Lz650QW_N6AEW6XPgZBqPf4jjz5sT&token_type=Bearer&expires_in=3600"
       2 .substring(1) => "access_token=BQDU7MpROitFFMlDPJPxNV2lVbe-iha8R_4e2recBzm90OwkhGKUAWLa1p8CU4xVkGIEIxVFb9XQxuYSKsy8g8FOItqrkCMKn8xosSwXmLCseig-rvW2piqVfIA17cqppJdY2kk8bNoZ6gLJBNkITJ5Lz650QW_N6AEW6XPgZBqPf4jjz5sT&token_type=Bearer&expires_in=3600"
       3 .split("&") => [
           "access_token=BQDU7MpROitFFMlDPJPxNV2lVbe-iha8R_4e2recBzm90OwkhGKUAWLa1p8CU4xVkGIEIxVFb9XQxuYSKsy8g8FOItqrkCMKn8xosSwXmLCseig-rvW2piqVfIA17cqppJdY2kk8bNoZ6gLJBNkITJ5Lz650QW_N6AEW6XPgZBqPf4jjz5sT",
           "token_type=Bearer",
           "expires_in=3600"
          ]
        4 .reduce((initial, item) => {}, {}) => Loop in array and return object of values
            - first iteration 
                parts =  ["access_token", "BQDU7MpROitFFMlDPJPxNV2lVbe-iha8R_4e2recBzm90OwkhGKUAWLa1p8CU4xVkGIEIxVFb9XQxuYSKsy8g8FOItqrkCMKn8xosSwXmLCseig-rvW2piqVfIA17cqppJdY2kk8bNoZ6gLJBNkITJ5Lz650QW_N6AEW6XPgZBqPf4jjz5sT"];
                initial = {access_token: "Decoded URI",};
            - second iteration
                parts = parts = ["token_type", "Bearer"];
                initial = {access_token: "Decoded URI", token_type: "Bearer",};
            - third iteration
                parts = ["expires_in", "3600"];
                initial = {access_token: "Decoded URI", token_type: "Decoded URI", expires_in: "Decoded URI"};
            
            return initial => {access_token: "Decoded URI", token_type: "Decoded URI", expires_in: "Decoded URI"};
    */
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
