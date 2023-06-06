<template>
  <div class="hero">
        <div class="hero-content">
          <h1>{{ "Welcome to our Movie Retail Website!" }}</h1>
          <p>{{ "Explore our collection of movies and make a purchase!" }}</p>
        </div>
        <img :src="'https://media.istockphoto.com/id/1355176914/photo/movie-theater-during-the-screening-of-an-animated-movie.jpg?s=612x612&w=0&k=20&c=IMnAa8LT6Da6is7QMo3wJWJFdYFEyHGMaB2XAquIWwY='" alt="heroImg" />
  </div>
  </template>
  
  <style scoped>
  .hero {
    position: relative;
    height: 400px;
  }
  
  .hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
  }
  </style>