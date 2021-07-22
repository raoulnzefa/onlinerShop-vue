<template>
  <div class="add-item">
    <form @submit.prevent="addItem">
      <label for="title">
        Product name
      </label>
      <input
        type="text"
        placeholder="Type product name..."
        ref="name"
        v-model="nameInput.value"
        :class="{ invalid: nameInput.isValid }"
      />
      <p v-if="nameInput.isValid">
        Product name must be at least 4 characters.
      </p>
      <label for="image">Link to image (300px x 300px)</label>
      <input
        type="text"
        placeholder="Paste link to image..."
        ref="link"
        v-model="linkInput.value"
        :class="{ invalid: linkInput.isValid }"
      />
      <p v-if="linkInput.isValid">Paste correct link to image.</p>
      <label for="price">Price</label>
      <input
        type="numeric"
        placeholder="Set product price in dollars..."
        ref="price"
        v-model="priceInput.value"
        :class="{ invalid: priceInput.isValid }"
      />
      <p v-if="priceInput.isValid">
        Price must be over 0 dollars and type number.
      </p>
      <button>
        Add new item
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: this.$store.state.products,
      nameInput: {
        isValid: false,
        value: "",
      },
      linkInput: {
        isValid: false,
        value: "",
      },
      priceInput: {
        isValid: false,
        value: "",
      },
    };
  },
  methods: {
    addNumberID() {
      this.$store.dispatch("addNumber");
    },
    addItem() {
      const newItem = {
        id: this.$store.state.productID,
        name: this.$refs.name.value,
        link: this.$refs.link.value,
        price: this.$refs.price.value,
      };
      if (this.nameInput.value.length > 3) {
        this.nameInput.isValid = false;
      } else {
        this.nameInput.isValid = true;
      }
      if (this.linkInput.value !== "") {
        this.linkInput.isValid = false;
      } else {
        this.linkInput.isValid = true;
      }
      if (this.priceInput.value !== 0 && this.priceInput.value > 0) {
        this.priceInput.isValid = false;
      } else {
        this.priceInput.isValid = true;
      }
      if (
        this.nameInput.isValid === false &&
        this.priceInput.isValid === false &&
        this.linkInput.isValid === false
      ) {
        this.addNumberID();
        this.$store.state.products.unshift(newItem);
        this.nameInput.isValid = false;
        this.priceInput.isValid = false;
        this.linkInput.isValid = false;
        this.nameInput.value = "";
        this.linkInput.value = "";
        this.priceInput.value = "";
        this.$router.push({ path: "/" });
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.add-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: calc(100vh - 60px);
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 600px;
  height: 400px;
  background-color: white;
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 0 0 5px black;
}

label {
  font-size: 22px;
}

input {
  border: 1px solid black;
  border-radius: 5px;
  width: 80%;
  padding: 4px 20px;
  outline: none;
}

input:focus {
  background-color: rgb(240, 240, 240);
}

input.invalid {
  background-color: rgba(255, 0, 0, 0.2);
  border: 1px solid red;
}

button {
  width: 50%;
  padding: 8px 0;
  font-size: 16px;
  text-transform: uppercase;
  background-color: rgb(230, 230, 230);
  border: 1px solid black;
  border-radius: 5px;
}

button:hover {
  cursor: pointer;
  background-color: rgb(217, 217, 217);
}

p {
  color: red;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
