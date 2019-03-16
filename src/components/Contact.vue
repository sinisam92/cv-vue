<template>
  <div>
    <div class="contact">
      <h1>CONTACT</h1>
    </div>
    <div class="jumbotron">
      <div class="jumb-content">
        <p>
          <strong>E-mail:</strong>
          <a href="mailto:sinisamanojlovic1@gmail.com">sinisamanojlovic1@gmail.com</a>
        </p>
        <p>
          <strong>Tel:</strong>
          <a href="tel:00381600992513"></a> 060/099-25-13
        </p>
        <p>
          <strong>Address:</strong>
          Novi Sad, Serbia
        </p>
        <div class="social-media">
          <ul>
            <a href="https://github.com/sinisam92" target="_blank">
              <li>
                <i class="fab fa-github"></i>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/sinisa-manojlovic-15bb07179/" target="_blank">
              <li>
                <i class="fab fa-linkedin"></i>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact h1 {
  font-size: 85px;
}
.jumbotron {
  background-color: rgb(214, 202, 202);
  font-size: 25px;
}
.jumbotron a {
  margin-left: 10px;
}
.jumb-content {
  text-align: left;
}
.social-media li {
  display: inline;
}
.social-media a {
  color: black;
}
.social-media a:hover {
  color: white;
}
@media screen and (max-width: 768px) {
  .jumbotron {
    font-size: 18px;
  }
  .contact h1 {
    font-size: 75px;
  }
}
</style>
