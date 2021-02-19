<template>
  <div>
    <ul class="catalog__list">
      <li
        class="catalog__item"
        v-for="(product, index) in products"
        :key="index"
      >
        <ProductItem :product="product" />
      </li>
    </ul>
  </div>
</template>
<script>
import ProductItem from "./ProductItem";

export default {
  props: ["products"],
  components: { ProductItem },
};
</script>
