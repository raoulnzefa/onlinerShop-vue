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
      <form>
        <label>Login</label>
        <input type="text" placeholder="Type your login..." />
        <label>Password</label>
        <input type="text" placeholder="Type your password..." />
        <button class="login">Sign in</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {};
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
}

form {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  box-shadow: 0 0 2px black;
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

form button {
  margin: 20px auto;
  width: 50%;
  padding: 4px 20px;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
