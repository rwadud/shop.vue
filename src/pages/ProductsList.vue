<template>
  <section>
    <ul>
      <product-item v-for="item in getProducts" :key="item.id" :item="item"></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters('products', ['getProducts'])
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>