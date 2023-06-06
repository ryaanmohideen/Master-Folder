<template>
    <div>
      <h2>Purchase Page</h2>
      <div class="movies-grid">
        <div v-for="movie in movies" :key="movie.id" class="movie-card">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" @click="openModal(movie)">
          <h3>{{ movie.title }}</h3>
          <p>Release Date: {{ movie.release_date }}</p>
          <button @click="addToCart(movie)">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '/src/stores/cart.js';
  export default {
    data() {
  return {
    movies: [],
    selectedMovie: null,
    showModal: false
  };
},

    mounted() {
      this.fetchMovies();
    },
    methods: {
      fetchMovies() {
        this.$http.get('/trending/movie/week')
          .then(response => {
            this.movies = response.data.results;
          })
          .catch(error => {
            console.log(error);
          });
      },
      addToCart(movie) {
      const cart = useCartStore(); // Access the cart store
      cart.add(movie);
      },
      openModal(movie) {
      this.selectedMovie = movie;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedMovie = null;
    }
  }
  }; 
  </script>
  
  <style>
  .movies-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
  
  .movie-card {
    text-align: center;
  }
  
  .movie-card img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }
  
  .movie-card h3 {
    margin-top: 10px;
  }
  
  .movie-card p {
    margin-bottom: 10px;
  }
  
  .movie-card button {
    background-color: #f2f2f2;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  </style>
  