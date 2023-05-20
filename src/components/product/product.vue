<template>
  <div class="product">
    <div class="product-image-wrapper">
      <img src="../../assets/img/product-item.jpg" alt="Product Image">
    </div>
    <div class="product-info-wrapper">
      <h3 class="product-title"> {{ item.productName }}</h3>
      <p class="product-description"> {{ item.productDescription }}</p>
      <div class="product-cost"> {{ item.productCost }} $</div>
      <order-actions
        :id="item.id"
        :count="item.count || 0"
        :name="item.productName"
        :cost="parseInt(item.productCost)"
        @handleCartAction="handleCartAction"
      />
    </div>
  </div>
</template>

<script>
import orderActions from '@/components/orderActions/orderActions'
export default {
  name: 'Product',
  emits: ['handleCartAction'],
  components: {
    orderActions
  },
  props: {
    item: Object
  },
  methods: {
    handleCartAction () {
      this.$emit('handleCartAction')
    }
  }
}
</script>

<style lang="scss" src="./product.scss" ></style>
