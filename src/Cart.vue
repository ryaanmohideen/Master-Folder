<template>
  <div>
    <h2>Shopping Cart</h2>
    <div v-if="cartItems.length === 0">Your cart is empty.</div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"  :alt="item.title">
        <h3>{{ item.title }}</h3>
        <p>Release Date: {{ item.release_date }}</p>
        <button @click="removeFromCart(item)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '/src/stores/cart.js';
export default {
  computed: {
    cartItems() {
      const cart = useCartStore();
      return cart.items; 
    },
  },
  methods: {
    removeFromCart(item) {
      const cart = useCartStore();
      cart.remove(item);
    },
  },
};
</script>

<style>
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.cart-item img {
  width: 100px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
}

.cart-item h3 {
  margin: 0;
}

.cart-item p {
  margin-bottom: 5px;
}

.cart-item button {
  background-color: #f2f2f2;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
