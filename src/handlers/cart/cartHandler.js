export function getProductsInCart () {
  return JSON.parse(localStorage.getItem('cart'))
}

export function addProductInCart ({ id, name, cost }) {
  const item = {
    id: id,
    name,
    cost,
    count: null
  }
  const cart = JSON.parse(localStorage.getItem('cart'))
  const existedProduct = cart.find(product => product.id === item.id)
  if (!existedProduct) {
    item.count = 1
    cart.push(item)
  } else {
    existedProduct.count += 1
    const index = cart.indexOf(existedProduct)
    cart[index] = existedProduct
  }

  localStorage.setItem('cart', JSON.stringify(cart))
}

export function removeProductInCart ({ id }) {
  const cart = JSON.parse(localStorage.getItem('cart'))
  const index = cart.findIndex((item) => item.id === id)

  cart[index].count--
  if (cart[index].count <= 0) {
    cart.splice(index, 1)
  }

  localStorage.setItem('cart', JSON.stringify(cart))
}

export function initialiseCart () {
  if (!JSON.parse(localStorage.getItem('cart'))) {
    localStorage.setItem('cart', JSON.stringify([]))
  }
}
