<template>
  <div class="items-area">
    <div class="item" v-for="item in productsList" :key="item" :id="item.id">
      <div class="item-title">
        <h3>{{ item.name }}</h3>
      </div>
      <div class="item-img">
        <img :src="item.link" alt="" />
      </div>
      <div class="item-buy">
        <div>
          Price: <span> {{ item.price }}</span> $
        </div>
        <button :id="item.id" @click="addItemToCart">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    productsList() {
      return this.$store.getters.productList;
    },
  },
  methods: {
    addItemToCart(e) {
      const idSelector = e.target.id;
      const selectedItem = document.getElementById(`${idSelector}`);
      const pickedTitle = selectedItem.querySelector(".item-title h3")
        .textContent;
      const pickedImg = selectedItem.querySelector(".item-img img").src;
      const pickedPrice = Number(
        selectedItem.querySelector(".item-buy span").textContent
      );
      this.$store.state.selectedItems.unshift({
        id: idSelector,
        name: pickedTitle,
        img: pickedImg,
        price: pickedPrice,
        amount: 1,
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.items-area {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
}

.item {
  width: 300px;
  height: 460px;
  background-color: white;
  margin: 30px auto;
  box-sizing: content-box;
  border: 2px solid rgb(30, 35, 50);
  border-radius: 7px;
  box-shadow: 0 1px 3px black;
}

.item .item-title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
}

.item .item-img {
  width: 300px;
  height: 300px;
}

.item .item-buy {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100px;
}

.item .item-buy div {
  width: 100%;
  text-align: center;
}

.item .item-buy button {
  width: 120px;
  padding: 4px 10px;
  text-transform: uppercase;
}
</style>
