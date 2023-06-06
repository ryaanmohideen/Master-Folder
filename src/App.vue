<template>
  <div>
    <header>
      <h1>Ryaan's Movie Rentals</h1>
      <button @click="login">Login</button>
      <i class="material-symbols-outlined" @click="goToCart"> shopping_cart </i>
    </header>
    <router-view></router-view>
    <footer>
      <p>Find us on all Social Media platforms @rynMrentals</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/login");
    },
    goToCart() {
      this.$router.push('/cart');
    }
  },

};
</script>

<style>
header {
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
}

</style>
