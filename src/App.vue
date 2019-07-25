<template>
  <div id="app">
    <header>
      <NavBar/>
    </header>
    <main class="container">
      <router-view></router-view>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/partials/NavBar";
import Footer from "./components/partials/Footer";
export default {
  name: "app",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Noticia Text", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
* {
  box-sizing: border-box;
}
html,
body {
  background-color: #F9F9F6;
  color: #4d4d4d;
  max-width: 100%;
  overflow-x: hidden;
}
a,
a:hover {
  text-decoration: none;
}
li {
  list-style: none;
}
html {
  height: 100%;
}
main {
  min-height: calc(100vh - 388px);
}
</style>
