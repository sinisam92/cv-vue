<template>
  <div class="footer container-fluid mt-auto py-3">
    <div class="flex-footer container">
      <div class="info">
        <div class="icons">
          <i class="fas fa-phone-square"></i>
        </div>
        <div class="info-content">
          <!-- <h5 class="info-label">
            <strong>Call</strong>
          </h5> -->
          <p><a href="tel:+381600992513">+381600992513</a></p>
        </div>
      </div>
      <div class="info">
        <div class="icons">
          <i class="fas fa-envelope-square"></i>
        </div>
        <div class="info-content">
          <!-- <h5 class="info-label">
            <strong>Email</strong>
          </h5> -->
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
          <!-- <h5 class="info-label">
            <strong>Follow Me</strong>
          </h5> -->
          <ul class="social-links">
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
        <div class="info-content copy-right-wrapper">
          <p class="copy-right">&copy;2019 by SM</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #e83556;
  width: 100%;
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
@media  (min-width: 769px) {
  .footer {
    padding-left: 0 !important;
    padding-right: 0 !important;
    .flex-footer {
      padding-left: 0 !important;
      padding-right: 0 !important;
      .info {
        display: inline-block;
        margin-right: 15px;
        .info-content {
          margin-top: 0 !important;
          margin-left: 0 !important;
          p {
            margin-top: 0 !important;
            margin-left: 0 !important;
          }
          .info-label {
            display: none !important;
          }
          
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .footer {
    margin-left: 0;
    .flex-footer {
      display: block;
      background-color: #e83556;
      width: 100%;
      padding-left: 0;
      padding-right: 0;
      .info-content {
      text-align: left;
      display: inline-flex;
      .copy-right {
            margin-top: 20px;
          }
      .social-links {
        margin-left: -29px;
        margin-top: 20px;
      }
      .info {
          .icons {
            margin: 0 0 !important
          }
          
        }
      } 
    }        
  }
  
}
@media (min-width: 992px) {
  .flex-footer {
    justify-content: space-between;
  }
}

</style>
