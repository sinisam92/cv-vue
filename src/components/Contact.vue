<template>
  <div class="wrapper">
    <div class="contact">
      <h1>CONTACT</h1>
    </div>
    <div class="jumbotron">
      <div class="jumb-content">
        <p class="contact-email">
          <strong>E-mail:</strong>
          <a class="email" href="mailto:sinisamanojlovic1@gmail.com">sinisamanojlovic1@gmail.com</a>
        </p>
        <p>
          <strong>Tel:</strong>
          <a class="phone" href="tel:+381600992513">+381600992513</a> 
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

<style lang="scss" scoped>
.phone {
  color: #e83556;
  &:hover {
    color: red;
  }
}
.email {
  color: #e83556;
  &:hover {
    color: red;
  }
}
.contact h1 {
  font-size: 85px;
}
.jumbotron {
  background-color: rgb(214, 202, 202);
  font-size: 25px;
  margin-bottom: 0;
}
.jumbotron a {
  margin-left: 10px;
}
.jumb-content {
  text-align: left;
}
.social-media {
  ul {
  text-align: center;
  margin-left: -64px;
  }
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
  .contact-email {
    display: grid;
  }
  .contact h1 {
    margin-left: -14px;
  }
}
</style>
