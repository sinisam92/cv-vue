<template>
  <div class="footer container-fluid mt-auto py-3">
    <div class="flex-footer container">
      <div class="info">
        <div class="icons">
          <i class="fas fa-phone-square"></i>
        </div>
        <div class="info-content">
          <h5>
            <strong>Call</strong>
          </h5>
          <p>T: 060-099-25-13</p>
        </div>
      </div>
      <div class="info">
        <div class="icons">
          <i class="fas fa-envelope-square"></i>
        </div>
        <div class="info-content">
          <h5>
            <strong>Email</strong>
          </h5>
          <a href="mailto:sinisamanojlovic1@gmail.com">
            <p>sinisamanojlovic1@gmail.com</p>
          </a>
        </div>
      </div>
      <div class="info">
        <div class="icons">
          <i class="fas fa-plus-square"></i>
        </div>
        <div class="info-content">
          <h5>
            <strong>Fallow Me</strong>
          </h5>
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
      <div class="info">
        <div class="icons">
          <i class="far fa-copyright"></i>
        </div>
        <div class="info-content">
          <p>&copy;2019 by SM</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #e83556;
  width: 100%;
  position: relative;
  margin-top: -100px;
  clear: both;
}
.flex-footer {
  display: flex;
}
.icons i {
  text-align: center;
  vertical-align: middle;
  line-height: 80px;
}
.fas,
.far {
  font-size: 40px;
  color: white;
}
.info {
  display: flex;
  color: white;
}
.info-content,
.info-content p {
  text-align: center;
  vertical-align: middle;
  margin-top: 10px;
  margin-left: 15px;
}
.info-content li {
  display: inline;
  margin-left: 5px;
}
.info-content ul {
  margin-left: -45px;
}
.info-content a {
  text-decoration: none;
  color: white;
}
.info-content a:hover {
  text-decoration: none;
  color: #61d0d4;
}
@media screen and (max-width: 768px) {
  .flex-footer {
    display: block;
    background-color: #e83556;
    width: 100%;
  }

  .icons {
    display: none;
  }
  .info-content {
    text-align: left;
  }
}
</style>
