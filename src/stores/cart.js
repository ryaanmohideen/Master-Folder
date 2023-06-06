import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  actions: {
    add(movie) {
      this.items.push(movie);
    },
    remove(movie) {
      const index = this.items.findIndex(item => item.id === movie.id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
  },
});
