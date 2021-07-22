import { createRouter, createWebHistory } from "vue-router";
import Items from "../components/Items.vue";
import AddItem from "../components/AddItem.vue";
import ShopCart from "../components/ShopCart.vue";
import SignIn from "../components/SignIn.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Items },
    { path: "/add-item", component: AddItem },
    { path: "/cart", component: ShopCart },
    { path: "/login", component: SignIn },
  ],
});

export default router;
