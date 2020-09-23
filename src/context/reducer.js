export const initialState = {
  user: null,
  // token:
  // "BQDw9oXJPBBboAEoUTEeZv2jGPWjM-JcVn7GPy_V2HBtCBkbDISyrckwHASJJtm5AOFtjyI7rzPdG4VaJ-vv_RowmVwM8Lo-c9EXo385gSmElRHwulMAmYrFB_FMcvWoRBAiVbn4PTP68qkWdkflQ0Onsq8N_NGtwPeNsxyzeavclkilCzFC",
  playlists: [],
  playing: false,
  discover_weekly: null,
  item: null,
  top_artists: null,
  spotify: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
