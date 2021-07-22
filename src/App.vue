<template>
  <div class="app-wrapper">
    <the-header></the-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div.wrapper {
  display: flex;
  flex-direction: column;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  background-color: rgb(230, 230, 230);
}
</style>
