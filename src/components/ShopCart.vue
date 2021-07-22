<template>
  <section>
    <h1>Items added to shop cart</h1>
    <h4 v-if="table.length === 0">Your shop cart is empty.</h4>
    <div
      class="added-product"
      v-for="(item, index) in selectedItemsGetters"
      :key="item"
      :id="item.id"
    >
      <div class="image-section">
        <img :src="item.img" alt="" />
      </div>
      <div class="text-section" id="testo">
        <p>Item</p>
        <h3>{{ item.name }}</h3>
        <p>Price ($)</p>
        <h3 class="itemPrice">{{ item.price }}</h3>
        <p>
          Amount: <span class="span-amount">{{ item.amount }}</span>
        </p>
        <button @click="setAmountDown">-1</button>
        <button @click="setAmountUp">+1</button>
      </div>
      <div class="buy-section">
        <button class="delete-item" @click="deleteItem(index)">
          Remove Item
        </button>
        <div class="price-zone">
          <p>Total price</p>
          <div class="total-price">
            <h2>{{ item.price * item.amount }}</h2>
            <span>$</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="summit" v-if="table.length !== 0">
    <form @submit.prevent="submitForm">
      <label for="fullname">Fullname</label>
      <input
        v-model="fullname.value"
        type="text"
        placeholder="Type your fullname..."
        :class="{ invalid: fullname.isValid }"
      />
      <label for="city">City</label>
      <input
        v-model="city.value"
        type="text"
        placeholder="Type your city..."
        :class="{ invalid: city.isValid }"
      />
      <label for="address">Address</label>
      <input
        v-model="address.value"
        type="text"
        placeholder="Type your address..."
        :class="{ invalid: address.isValid }"
      />
      <label for="postcode">Post code</label>
      <input
        v-model="postcode.value"
        type="text"
        placeholder="Type your post code..."
        :class="{ invalid: postcode.isValid }"
      />
      <label for="email">E-mail</label>
      <input
        v-model="email.value"
        type="email"
        placeholder="Type your e-mail..."
        :class="{ invalid: email.isValid }"
      />
      <label for="name">Phone number</label>
      <input
        v-model="number.value"
        type="decimal"
        placeholder="Type your phone number..."
        :class="{ invalid: number.isValid }"
      />
      <label for="delivery">Delivery</label>
      <select v-model="delivery.value" name="delivery" id="delivery">
        <option value="null" disabled selected>-- Select delivery --</option>
        <option value="dpd">DPD</option>
        <option value="ups">UPS</option>
        <option value="dhl">DHL</option>
      </select>
      <p class="delivery-option" :class="{ invalid: delivery.isValid }">
        Select delivery
      </p>
      <h4 class="total-order-price">Total order price:<span></span> $</h4>
      <h3 class="accept-rules" :class="{ invalid: acceptRules.isValid }">
        I accept rules and order
      </h3>
      <input v-model="acceptRules.value" type="checkbox" />
      <button>Order</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: this.$store.getters.selectedItemsGetters,
      totalPriceArray: [],
      fullname: {
        value: "",
        isValid: false,
      },
      city: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      postcode: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      number: {
        value: "",
        isValid: false,
      },
      delivery: {
        value: null,
        isValid: false,
      },
      acceptRules: {
        value: null,
        isValid: false,
      },
    };
  },
  computed: {
    selectedItemsGetters() {
      return this.$store.getters.selectedItemsGetters;
    },
  },
  methods: {
    deleteItem(id) {
      console.log(this.selectedItemsGetters.length);
      this.$store.getters.selectedItemsGetters.splice(id, 1);
      console.log(this.selectedItemsGetters.length);
    },
    sumUp() {
      this.$store.state.totalPrice = [];
      const finalPriceZone = document.querySelector(".total-order-price span");
      const everyAddedProduct = document.querySelectorAll(".added-product");
      everyAddedProduct.forEach((el) => {
        const singleElem = Number(
          el.querySelector(".buy-section .price-zone .total-price h2")
            .textContent
        );
        this.$store.getters.totalPriceGetters.unshift(singleElem);
        console.log(singleElem);
      });
      console.log(this.$store.getters.totalPriceGetters);
      const finalPrice = this.$store.state.totalPrice.reduce(
        (a, b) => a + b,
        0
      );
      finalPriceZone.textContent = finalPrice.toFixed(2);
    },
    setAmountUp(e) {
      const elementId = e.target.parentNode.parentNode.id;
      const element = document.getElementById(`${elementId}`);
      const itemAmount = Number(
        Number(
          element.querySelector(".text-section .span-amount").textContent
        ) + 1
      );
      element.querySelector(
        ".text-section .span-amount"
      ).textContent = itemAmount;
      const elemPrice = Number(
        element.querySelector(".text-section .itemPrice").textContent
      );
      const totalPrice = elemPrice * itemAmount;
      element.querySelector(
        ".buy-section .price-zone h2"
      ).textContent = totalPrice.toFixed(2);
      this.sumUp();
    },
    setAmountDown(e) {
      const elementId = e.target.parentNode.parentNode.id;
      const element = document.getElementById(`${elementId}`);
      if (
        Number(
          Number(
            element.querySelector(".text-section .span-amount").textContent
          ) - 1
        ) === 0
      ) {
        alert("Nie można niżej");
      } else {
        const itemAmount = Number(
          Number(
            element.querySelector(".text-section .span-amount").textContent
          ) - 1
        );
        element.querySelector(
          ".text-section .span-amount"
        ).textContent = itemAmount;
        const elemPrice = Number(
          element.querySelector(".text-section .itemPrice").textContent
        );
        const totalPrice = elemPrice * itemAmount;
        element.querySelector(
          ".buy-section .price-zone h2"
        ).textContent = totalPrice.toFixed(2);
        console.log(elemPrice);
        console.log(itemAmount);
        this.sumUp();
      }
    },
    submitForm() {
      if (this.fullname.value !== "") {
        this.fullname.isValid = false;
      } else {
        this.fullname.isValid = true;
      }
      if (this.city.value !== "") {
        this.city.isValid = false;
      } else {
        this.city.isValid = true;
      }
      if (this.address.value !== "") {
        this.address.isValid = false;
      } else {
        this.address.isValid = true;
      }
      if (this.postcode.value !== "") {
        this.postcode.isValid = false;
      } else {
        this.postcode.isValid = true;
      }
      if (this.email.value !== "") {
        this.email.isValid = false;
      } else {
        this.email.isValid = true;
      }
      if (this.number.value !== "") {
        this.number.isValid = false;
      } else {
        this.number.isValid = true;
      }
      if (this.delivery.value !== null) {
        this.delivery.isValid = false;
      } else {
        this.delivery.isValid = true;
      }
      if (this.acceptRules.value !== null) {
        this.acceptRules.isValid = false;
      } else {
        this.acceptRules.isValid = true;
      }
      if (
        this.fullname.isValid === false &&
        this.city.isValid === false &&
        this.address.isValid === false &&
        this.postcode.isValid === false &&
        this.email.isValid === false &&
        this.number.isValid === false &&
        this.delivery.isValid === false &&
        this.acceptRules.isValid === false &&
        this.fullname.value !== "" &&
        this.city.value !== "" &&
        this.address.value !== "" &&
        this.postcode.value !== "" &&
        this.email.value !== "" &&
        this.number.value !== "" &&
        this.delivery.value !== null &&
        this.acceptRules.value !== null
      ) {
        this.table = [];
        this.$store.state.selectedItems = [];
        this.$store.state.totalPrice = [];
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  min-height: 30vh;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
}

h1 {
  font-size: 30px;
  text-align: center;
  padding: 10px 0;
  text-transform: uppercase;
}

.added-product {
  display: flex;
  width: 800px;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  margin-top: 20px;
}

.added-product:nth-last-child(1) {
  margin-bottom: 20px;
}

.image-section {
  width: 300px;
  height: 300px;
}

.text-section {
  position: relative;
  width: 300px;
  height: 300px;
}

p {
  font-size: 20px;
  padding: 10px 20px;
}

h3 {
  font-size: 24px;
  padding: 0 24px;
}

span {
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
}

button {
  font-size: 20px;
  border: none;
  padding: 6px 20px;
  background-color: rgb(240, 240, 240);
  border-radius: 10px;
  z-index: 1;
}

button:hover {
  cursor: pointer;
}

button:nth-last-child(2) {
  margin-left: 20px;
  margin-right: 20px;
}

button.delete-item {
  background-color: transparent;
  margin-top: 50px;
  padding: 20px 20px;
}

.text-section h3,
.text-section p {
  word-break: break-all;
}
.fa-trash-alt {
  font-size: 40px;
}

.buy-section {
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: space-between;
}

.price-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.price-zone h2 {
  padding: 6px 0;
}

.price-zone p {
  width: 100%;
  text-align: center;
  font-size: 20px;
}

.total-price {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

div.summit {
  width: 100%;
  height: 100%;
  border-top: 2px solid black;
}
div.summit form {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  margin: 0 auto;
}
div.summit form label {
  font-size: 20px;
  padding: 10px 0;
}
div.summit form input {
  width: 300px;
  border: none;
  border-radius: 7px;
  padding: 6px 20px;
  outline: none;
}

div.summit form h3 {
  box-sizing: content-box;
  padding: 20px 0;
  font-size: 14px;
}

div.summit select {
  width: 300px;
  border: none;
  border-radius: 7px;
  padding: 6px 20px;
  outline: none;
}

div.summit form button {
  font-size: 24px;
  padding: 8px 30px;
  margin: 10px 0;
  background-color: rgb(240, 240, 240);
}

div.summit form input[type="checkbox"] {
  height: 20px;
  width: 20px;
  border: none;
}

input.invalid {
  background-color: rgba(255, 0, 0, 0.2);
  border: 1px solid red;
}

p.delivery-option {
  color: red;
  visibility: hidden;
}

p.delivery-option.invalid {
  color: red;
  visibility: visible;
}

.accept-rules.invalid {
  color: red;
}

.total-order-price {
  font-size: 24px;
}

.total-order-price span {
  font-size: 20px;
}
</style>
