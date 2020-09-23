import React, { useEffect } from "react";
import "./App.css";

import Login from "./components/login/Login";
import Player from "./components/player/PLayer";

import { getTokenFromUrl } from "./spotify";

import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./context/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });

      spotify.setAccessToken(_token);

      // testing access
      spotify
        .getMe()
        .then((user) => dispatch({ type: "SET_USER", user: user }));

      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      );

      spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, [token, dispatch]);

  // spotify.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", function (error, data) {
  //   if (error) console.log(error);
  //   else console.log("Artist albums", data);
  // });

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
