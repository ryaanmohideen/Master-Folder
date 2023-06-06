<template>
  <div id="thriller">
    <h1>Thriller Catalogue</h1>
  </div>
  <form>
    <label for="movie">Choose a Thriller Movie:</label>
    <select name="movie" v-model="selectedMovieId">
      <option v-for="movie in movies" :key="movie.id" :value="movie.id">
        {{ movie.title }}
      </option>
    </select>
    <br /><br />
    <button type="button" @click="getMovie">Get</button>
  </form>
  <div id="movie-data">
    <h2>{{ movieData.title }}</h2>
    <h4>{{ movieData.tagline }}</h4>
    <img :src="getMoviePosterUrl(movieData.poster_path)" alt="Movie Poster" />
    <p>{{ movieData.overview }}</p>
    <h6>Release Date: {{ movieData.release_date }}</h6>
    <h6 v-if="director">Director: {{ director.name }}</h6>
    <h6>Runtime: {{ movieData.runtime }} min</h6>
    <h6>Budget: ${{ movieData.budget }}</h6>
    <h6>Revenue: ${{ movieData.revenue }}</h6>
    <h3 v-if="trailers.length > 0">Trailer</h3>
    <iframe
      v-if="trailers.length > 0"
      :src="getTrailerEmbedUrl(trailers[0].key)"
      width="560"
      height="315"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedMovieId: "",
      movies: [
        { id: "475557", title: "Joker" },
        { id: "458723", title: "Us" },
        { id: "77", title: "Memento" },
        { id: "807", title: "Se7en" },
        { id: "27205", title: "Inception" },
        { id: "419430", title: "Get Out" },
        { id: "496243", title: "Parasite" },
        { id: "11324", title: "Shutter Island" },
        { id: "157336", title: "Interstellar" },
        { id: "146233", title: "Prisoners" },
      ],
      movieData: {},
      director: "",
      trailers: [],
    };
  },
  methods: {
    async getMovie() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${this.selectedMovieId}?api_key=f6cc3236842fdd6ef958fa871a1857bb&append_to_response=videos,credits`
        );
        this.movieData = response.data;
        this.director = this.movieData.credits.crew.find(
          (crew) => crew.job === "Director"
        );
        this.trailers = this.movieData.videos.results.filter(
          (video) => video.type === "Trailer"
        );
      } catch (error) {
        console.log(error);
      }
    },
    getMoviePosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
    getTrailerEmbedUrl(trailerKey) {
      return `https://www.youtube.com/embed/${trailerKey}`;
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Rubik", sans-serif;
  background-color: maroon;
  min-height: 100vw;
  color: black;
  padding: 0;
  margin: 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-top: 40px;
}

form {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

label {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 10px;
}

select {
  font-size: 1rem;
  font-weight: 400;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 20px;
}

button {
  background-color: #222;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #333;
}

.movie-details {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-items: center;
}

img {
  max-width: 100%;
  height: auto;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

h4 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  font-style: italic;
}

h6 {
  font-size: 1rem;
  font-weight: 580;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 10px;
}
</style>
