import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      products: [
        {
          id: 0,
          name: "Skateboard",
          link:
            "https://bizzyskateboards.com/environment/cache/images/300_300_productGfx_1735.jpg",
          price: 59.99,
        },
        {
          id: 1,
          name: "Scooter Xiaomi 40W",
          link:
            "https://dobre.promo/environment/cache/images/300_300_productGfx_3062/hulajnoga-elektryczna-Xiaomi-Mi-Electric-Scooter-1S.jpg",
          price: 449.99,
        },
        {
          id: 2,
          name: "Helmet for adults",
          link:
            "https://www.rmdbike.com/environment/cache/images/300_300_productGfx_10999/kask-skate-bmx-stunt--scooter-core-street-helmet-helm-White-1.jpg",
          price: 39.99,
        },
        {
          id: 3,
          name: "Knee protector",
          link:
            "https://cdn.getgeared.co.uk/pub/media/catalog/product/cache/b3ebe7fc5ae95cd98cccc67872250e5f/r/f/rfpg0580380d_main-rev-it-scram-knee-protector-black-1a.jpg",
          price: 29.99,
        },
      ],
      productID: 4,
      selectedItems: [],
      totalPrice: [],
      addButton: false,
    };
  },
  mutations: {
    addItemToArray(state, payload) {
      state.products = state.products.push(payload);
    },
    addNumber(state) {
      state.productID = state.productID + 1;
    },
    clearArray(state) {
      state.selectedItems = [];
    },
    toggleButton(state) {
      state.addButton = true;
    },
  },
  actions: {
    addItemToArray(context, payload) {
      context.commit("addItemToArray", payload);
    },
    addNumber(context) {
      context.commit("addNumber");
    },
    toggleButton(context) {
      context.commit("toggleButton");
    },
  },
  getters: {
    productList(state) {
      return state.products;
    },
    selectedItemsGetters(state) {
      return state.selectedItems;
    },
    totalPriceGetters(state) {
      return state.totalPrice;
    },
    buttonVisibility(state) {
      return state.addButton;
    },
  },
});

export default store;
