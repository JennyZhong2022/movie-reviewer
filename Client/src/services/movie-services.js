const APIKey = import.meta.env.VITE_TMDB_API_KEY;
// console.log("API Key:", APIKey);

export const getMoviesByFetch = async (
  searchTerm,
  pageNumber,
  selectedYear
) => {
  const url = searchTerm
    ? `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=${encodeURIComponent(
        searchTerm
      )}&page=${pageNumber}&include_adult=false`
    : `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&primary_release_year=${selectedYear}&with_watch_monetization_types=flatrate`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await response.json();
  return data;
};
