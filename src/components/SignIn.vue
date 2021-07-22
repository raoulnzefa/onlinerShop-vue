<template>
  <main class="signIn">
    <aside>
      <h2>How to sign in?</h2>
      <p>1. Type "admin" in login input</p>
      <p>2. Type "password" in password input</p>
      <p>3. "Add item" button now is available</p>
      <p>4. You can now add items to products section</p>
    </aside>
    <section>
      <form @submit.prevent="submitForm" :class="{ invalid: isValid }">
        <label>Login</label>
        <input
          type="text"
          placeholder="Type your login..."
          v-model="loginInput"
          :class="{ success: successClass }"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Type your password..."
          v-model="passwordInput"
          :class="{ success: successClass }"
        />
        <button class="login">Sign in</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      login: "admin",
      password: "password",
      loginInput: "",
      passwordInput: "",
      isValid: false,
      successClass: false,
    };
  },
  methods: {
    submitForm() {
      if (this.loginInput === "admin" && this.passwordInput === "password") {
        (this.loginInput = ""), (this.passwordInput = "");
        this.isValid = false;
        this.toggle();
        this.successClass = true;
        setTimeout(() => {
          this.successClass = false;
        }, 2500);
      } else {
        this.isValid = true;
      }
    },
    toggle() {
      this.$store.dispatch("toggleButton");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
main.signIn {
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
}

aside {
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  box-shadow: 0 0 2px black;
  display: flex;
  flex-direction: column;
}

aside h2 {
  margin: 0 auto;
  padding: 6px 0;
}

aside p {
  padding: 4px 4px;
  word-break: break-all;
}

section {
  z-index: 10;
}

form {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  box-shadow: 0 0 2px black;
  margin-left: 100px;
}

form::after {
  position: absolute;
  content: "Niepoprawne dane";
  word-break: break-all;
  padding: 4px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 200px;
  height: 40px;
  font-size: 20px;
  background-color: rgb(151, 140, 140);
  border: 2px solid red;
  box-shadow: 0 0 2px red;
  color: red;
  left: 300px;
  visibility: hidden;
}

form.invalid::after {
  visibility: visible;
}

form label {
  padding: 7px 100px;
  margin: 0 auto;
}

form input {
  width: 70%;
  margin: 0 auto;
  padding: 4px 10px;
  border-radius: 4px;
}

form input.success,
form label.success {
  background-color: rgb(47, 255, 64);
}

form button {
  margin: 20px auto;
  width: 50%;
  padding: 4px 20px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: rgb(30, 40, 50);
  color: rgb(240, 240, 240);
  border-radius: 8px;
  letter-spacing: 1px;
  font-size: 16px;
}

form button:hover {
  background-color: rgb(60, 70, 80);
  cursor: pointer;
}
</style>
