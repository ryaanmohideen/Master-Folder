import { TMDB_API_KEY } from "./key.js";

const getMovie = async () => {
  const movieSelect = document.getElementById("movie");
  const selectedMovieId = movieSelect.value;

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${selectedMovieId}?api_key=${TMDB_API_KEY}&append_to_response=videos,credits,reviews,similar`
  );
  const movieData = response.data;

  const movieDataContainer = document.getElementById("movie-data");
  movieDataContainer.innerHTML = "";

  const movieTitle = document.createElement("h2");
  movieTitle.innerText = movieData.title;
  movieDataContainer.appendChild(movieTitle);

  const tagline = document.createElement("h4");
  tagline.innerText = `"${movieData.tagline}"`;
  movieDataContainer.appendChild(tagline);


  const moviePoster = document.createElement("img");
  moviePoster.src = `https://image.tmdb.org/t/p/w500${movieData.poster_path}`;
  movieDataContainer.appendChild(moviePoster);

  const movieOverview = document.createElement("p");
  movieOverview.innerText = movieData.overview;
  movieDataContainer.appendChild(movieOverview);

  const releaseDate = document.createElement("h6");
  releaseDate.innerText = `Release Date: ${movieData.release_date}`;
  movieDataContainer.appendChild(releaseDate);

  const director = movieData.credits.crew.find(
    (crew) => crew.job === "Director"
  );
  if (director) {
    const directorName = document.createElement("h6");
    directorName.innerText = `Director: ${director.name}`;
    movieDataContainer.appendChild(directorName);
  }

  const runtime = document.createElement("h6");
  runtime.innerText = `Runtime: ${movieData.runtime} min`;
  movieDataContainer.appendChild(runtime);

  const budget = document.createElement("h6");
  budget.innerText = `Budget: $${movieData.budget}`;
  movieDataContainer.appendChild(budget);

  const revenue = document.createElement("h6");
  revenue.innerText = `Revenue: $${movieData.revenue}`;
  movieDataContainer.appendChild(revenue);

  const trailers = movieData.videos.results.filter(
    (video) => video.type === "Trailer"
  );

  if (trailers.length > 0) {
    const firstTrailer = trailers[0];

    const trailerTitle = document.createElement("h3");
    trailerTitle.innerText = "Trailer";
    movieDataContainer.appendChild(trailerTitle);

    const trailerEmbed = document.createElement("iframe");
    trailerEmbed.src = `https://www.youtube.com/embed/${firstTrailer.key}`;
    trailerEmbed.width = 560;
    trailerEmbed.height = 315;
    trailerEmbed.allowFullscreen = true;
    movieDataContainer.appendChild(trailerEmbed);
  }
 



  return movieDataContainer;
};

const button = document.querySelector("button");
button.addEventListener("click", getMovie);
