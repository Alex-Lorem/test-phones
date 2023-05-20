<template>
  <div class="order-actions">
    <button class="order-add" @click="removeProduct">
      -
    </button>
    <div class="order-counter">
      {{ counter }}
    </div>
    <button class="order-delete" @click="addProduct">
      +
    </button>
  </div>
</template>

<script>
import { cartHandler } from '@/handlers'

export default {
  name: 'orderActions',
  props: {
    count: Number,
    id: Number,
    name: String,
    cost: Number
  },
  watch: {
    count (value) {
      this.counter = value
    }
  },
  data () {
    return {
      counter: this.count || 0
    }
  },
  methods: {
    addProduct () {
      if (this.counter < 99) {
        cartHandler.addProductInCart({ id: this.id, name: this.name, cost: this.cost })
        this.counter++
        this.$emit('handleCartAction')
      }
    },
    removeProduct () {
      if (this.counter > 0) {
        this.counter--
        cartHandler.removeProductInCart({ id: this.id })
        this.$emit('handleCartAction')
      }
    }
  }
}
</script>

<style src="./orderActions.scss" lang="scss" scoped>

</style>
