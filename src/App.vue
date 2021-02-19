<template>
  <div>
    <section class="catalog">
      <ProductList :products="products" />
    </section>
  </div>
</template>

<script>
import products from "./data/products";
import ProductList from './components/ProductList';

export default {
  name: "App",
  components: {ProductList},
  data: function () {
    return {
      products,
    };
  },
};

</script>
