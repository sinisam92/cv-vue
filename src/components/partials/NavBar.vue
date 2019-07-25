<template>
  <div>
    <div class="nav-flex-container">
      <div class="my-name">
        <h1>
          <strong>Siniša</strong>
        </h1>
        <h1>
          <strong>Manojlović</strong>
        </h1>
        <span>
          <strong>Web Developer</strong>
        </span>
      </div>
      <div class="nav-bar">
        <nav>
          <ul>
            <li>
              <router-link to="/" exact>HOME</router-link>
            </li>
            <li>
              <router-link to="/resume">RESUME</router-link>
            </li>
            <li>
              <router-link to="/projects">PORTFOLIO</router-link>
            </li>
            <li>
              <router-link to="/contact">CONTACT ME</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-flex-container {
  display: inline-flex;
}
.nav-bar li,
a {
  display: inline;
  margin-left: 5px;
  color: #4d4d4d;
  font-weight: bold;
  outline: none;
}
.nav-bar a:hover {
  text-decoration: none;
  color: #61d0d4;
}
.nav-bar {
  text-align: left;
}
.nav-bar ul {
  text-align: center;
  vertical-align: middle;
  line-height: 160px;
}
.my-name {
  text-align: left;
}
.my-name h1 {
  font-size: 45px;
}
.my-name span {
  font-size: 22px;
}
.router-link-active {
  color: #61d0d4;
}
@media screen and (max-width: 991px) {
  .nav-flex-container {
    display: inline-block;
    margin: 0;
  }
  .nav-bar ul {
    text-align: left;
    display: block;
    margin-left: -50px;
  }
  .my-name {
    text-align: left;
  }
}
@media (min-width: 320px) and (max-width: 331px) {
  .nav-bar {
    li,
    a {
      margin-left: 3px !important;
    }
  }
}
</style>
