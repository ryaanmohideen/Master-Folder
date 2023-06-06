<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="authenticate">
        <div>
          <label for="username">Username: </label>
          <input type="text" id="username" v-model="username">
        </div>
        <div>
          <label for="password">Password: </label>
          <input type="password" id="password" v-model="password">
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      authenticate() {
        if (this.username === 'tmdb' && this.password === 'movies') {
          this.$router.push('/purchase');
        }
      },
    },
  };
  </script>
  