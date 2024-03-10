import { createSlice } from "@reduxjs/toolkit";

interface MovieDataInterface {
  results: Array<Object>;
  total_pages: number;
  searchInput: string;
}
const emptyObject: MovieDataInterface = {
  total_pages: 0,
  results: [],
  searchInput: "",
};
const initialState = {
  loading: false,
  movieData: emptyObject,
  error: "",
};

const movieDataFromSearch = createSlice({
  name: "movieDataFromSearch",
  initialState,
  reducers: {
    _fetchRequestMovieFromSearch(state) {
      state.loading = true;
    },
    _fetchSuccessMovieFromSearch(state, action) {
      state.movieData = action.payload;
      state.loading = false;
    },
    _fetchFailMovieFromSearch(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  _fetchFailMovieFromSearch,
  _fetchRequestMovieFromSearch,
  _fetchSuccessMovieFromSearch,
} = movieDataFromSearch.actions;

export default movieDataFromSearch.reducer;
