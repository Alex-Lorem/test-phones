<template>
  <h1 class="main-title">Phone Store</h1>

  <cart-icon class="cart-icon" @click="isCartOpened = !isCartOpened"/>
  <transition name="fade">
    <div class="order" v-if="isCartOpened">
      <div class="order-form" v-if="isCartOpened">
        <closeIcon class="order-close" @click="isCartOpened = !isCartOpened" />
        <div v-if="productsInCart.length > 0">
          <h3 class="order-title">Positions:</h3>
          <ul>
            <template v-for="item in productsInCart" :key="item">
              <li class="order-position">
                {{ item.name }}
                {{ item.cost }}$
                <order-actions
                  :id="item.id"
                  :count="item.count"
                  :name="item.name"
                  :cost="parseInt(item.cost)"
                  @handleCartAction="handleCartAction"
                />
              </li>
            </template>
          </ul>

          <button class="order-pay">Pay: {{ this.sum }}$</button>
        </div>
        <div v-else class="order-nothing"> Nothing to Buy!</div>
      </div>
    </div>
  </transition>
  <div class="products">
    <div class="product-wrapper" v-for="item in items" :key="item">
      <product :item="item" @handleCartAction="handleCartAction"/>
    </div>
  </div>
</template>

<script>
import product from '@/components/product/product'
import { products } from '@/http/index'
import cartIcon from '@/components/icon/cart.vue'
import closeIcon from '@/components/icon/close'
import { cartHandler } from '@/handlers'
import orderActions from '@/components/orderActions/orderActions'

export default {
  name: 'App',
  data () {
    return {
      items: [],
      isCartOpened: false,
      productsInCart: [],
      sum: 0
    }
  },
  components: {
    product,
    orderActions,
    cartIcon,
    closeIcon
  },
  methods: {
    sumUpCost (productsInCart) {
      let sum = 0
      this.productsInCart = productsInCart
      for (const item of productsInCart) {
        sum += item.count * item.cost
      }
      this.sum = sum
    },
    updateCart () {
      const productsInCart = cartHandler.getProductsInCart()
      this.sumUpCost(productsInCart)
      return true
    },
    handleCartAction () {
      const productsInCart = cartHandler.getProductsInCart()
      this.sumUpCost(productsInCart)
      this.items.forEach((item) => {
        item.count = 0
      })
      if (productsInCart.length) {
        this.productsInCart = productsInCart
        const matchedProducts = productsInCart.filter(({ id: id1 }) => this.items.some(({ id: id2 }) => id1 === id2))
        for (let i = 0; i < this.items.length; i++) {
          const itemInCart = matchedProducts.find(({ id }) => id === this.items[i].id)
          if (itemInCart) {
            this.items[i].count = itemInCart.count
          }
        }
      }
    }
  },
  created () {
    this.items = products.loadProducts()
    cartHandler.initialiseCart()
    const productsInCart = cartHandler.getProductsInCart()
    if (productsInCart.length) {
      this.productsInCart = productsInCart
      const matchedProducts = productsInCart.filter(({ id: id1 }) => this.items.some(({ id: id2 }) => id1 === id2))
      for (let i = 0; i < this.items.length; i++) {
        const itemInCart = matchedProducts.find(({ id }) => id === this.items[i].id)
        if (itemInCart) {
          this.items[i].count = itemInCart.count
        }
      }
    }
    this.sumUpCost(productsInCart)
  }
}
</script>

<style  lang="scss" src="./globals.scss"></style>
