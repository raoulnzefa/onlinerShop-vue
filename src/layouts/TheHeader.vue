<template>
  <header>
    <div class="title-zone">
      <router-link class="back" to="/">
        <h1>Onliner</h1>
        <span>online shopping</span>
      </router-link>
    </div>
    <div class="menu-area">
      <input type="text" placeholder="Search for items" />
      <button class="search">Search</button>
      <router-link to="/add-item" class="add-item" v-if="visibility"
        >Add item</router-link
      >
      <router-link to="/cart" @click="setPrice">Shop cart</router-link>
      <router-link to="/login">Sign in</router-link>
      <router-link class="product-a" to="/">Products</router-link>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    visibility() {
      return this.$store.getters.buttonVisibility;
    },
  },
  methods: {
    checkShopcart() {
      this.$store.state.totalPrice = [];
      const finalPriceZone = document.querySelector(".total-order-price span");
      const everyAddedProduct = document.querySelectorAll(".added-product");
      everyAddedProduct.forEach((el) => {
        const singleElem = Number(
          el.querySelector(".buy-section .price-zone .total-price h2")
            .textContent
        );
        this.$store.state.totalPrice.unshift(singleElem);
        console.log(singleElem);
      });
      console.log(this.$store.state.totalPrice);
      const finalPrice = this.$store.state.totalPrice.reduce(
        (a, b) => a + b,
        0
      );
      finalPriceZone.textContent = finalPrice;
    },
    setPrice() {
      setTimeout(this.checkShopcart, 500);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Uchen&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
header {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: rgb(30, 35, 50);
}

.title-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26%;
  height: 100%;
  font-family: "Uchen", serif;
  font-size: 20px;
  color: rgb(240, 240, 240);
}

.title-zone span {
  display: block;
  padding-left: 10px;
  padding-top: 20px;
}

.menu-area {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 74%;
  height: 100%;
}

.menu-area input {
  width: 60%;
  height: 70%;
  border: none;
  border-radius: 7px;
  outline: none;
  padding: 6px 10px;
}

.menu-area button {
  font-family: "Poppins", sans-serif;
  height: 100%;
  border: none;
  padding: 0 10px;
  background-color: transparent;
  color: rgb(240, 240, 240);
}

.menu-area button:hover {
  cursor: pointer;
  background-color: rgb(40, 45, 60);
}

.menu-area button.search {
  height: 80%;
  border-radius: 5px;
  border: 1px solid rgb(240, 240, 240);
}
a {
  font-family: "Poppins", sans-serif;
  border: none;
  padding: 0 10px;
  background-color: transparent;
  color: rgb(240, 240, 240);
  text-decoration: none;
}

a:hover {
  cursor: pointer;
}

.product-a {
  border: 2px solid white;
  padding: 4px 20px;
}

.back {
  display: flex;
}
</style>
