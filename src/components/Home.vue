<template>
  <div class="main-flex-container">
    <div class="profile-image">
      <img id="slide" src="./../assets/sinisaCVupdated.jpg" alt="Profile image">
    </div>
    <div class="main-content" style="clear:both;">
      <h1>
        <strong>Hello,</strong>
      </h1>
      <h2>a bit about me:</h2>
      <div class="my-circles">
        <router-link to="/resume">
          <div class="circles circle-red">
            <span>MY RESUME</span>
          </div>
        </router-link>
        <router-link to="/projects">
          <div class="circles circle-blue">
            <span>MY WORK</span>
          </div>
        </router-link>
        <router-link to="/resume">
          <div class="circles circle-yallow">
            <span>MY SKILLS</span>
          </div>
        </router-link>
      </div>
      <div class="about-me">
        <p>
          I like to challenge myself. I like to learn, so I like to try new
          things and keep growing.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.profile-image {
  text-align: left;
  margin-left: 150px;
}
.profile-image img {
  border-radius: 100%;
  filter: gray;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  animation-duration: 1.3s;
  animation-name: slidein;
}
@keyframes slidein {
  from {
    margin-left: 20%;
    opacity: 0.5;
  }

  to {
    margin-left: 0%;
    opacity: 1;
  }
}
.main-flex-container {
  display: flex;
  margin-left: -10px;
}
.main-content {
  margin-left: 20px;
  text-align: left;
}
.main-content h1 {
  font-size: 75px;
}
.main-content {
  width: 100%;
}
.main-content h2 {
  font-size: 55px;
}
.my-circles {
  display: flex;
  float: left;
}
.circles {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  font-size: 15px;
  color: #fff;
  line-height: 130px;
  text-align: center;
  margin-right: 25px;
}
.circle-red {
  background-color: #ee2b4e;
}
.circle-red:hover {
  background-color: #9b2339;
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}
.circle-blue {
  background-color: #61d0d4;
}
.circle-blue:hover {
  background-color: #418b8d;
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}
.circle-yallow {
  background-color: #bab808;
}
.circle-yallow:hover {
  background-color: #908b1a;
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}
.about-me {
  display: inline-block;
  margin-top: 25px;
  width: 60%;
  font-family: "Open Sans", sans-serif;
}
@media screen and (max-width: 991px) {
  
  .main-content h2 {
    font-size: 50px;
  }
  .main-flex-container {
    display: block;
  }
  .profile-image {
    text-align: center;
    margin-left: 0;
    margin-right: -10px;
    img {
      width: 100%;
    }
  }
  .my-circles {
    margin-left: -20px;
  }
  .circles {
    width: 90px;
    height: 90px;
    font-size: 15px;
    color: #fff;
    line-height: 90px;
    text-align: center;
    margin-right: 20px;
  }

  .about-me {
    text-align: center;
    width: 90%;
  }
  .main-content h2 {
    font-size: 45px;
  }
 
}
@media screen and (min-width: 769px){
  .main-flex-container {
    margin-left: -24px;
    display: inline-flex !important;
    gap: 30px;
    .profile-image {
      margin-left: 0;
      img {
        width: initial;
      }
    }
    .main-content {
      margin-left: 46px;
      h1 {
        font-size: 55px;
      }
      h2 {
        font-size: 45px;
      }
    }
    .my-circles {
      .circles {
        width: 110px;
        height: 110px;
        line-height: 110px;
        margin-right: 20px;
      }
    }
    .about-me {
   
      text-align: center;
    }
  }
}

</style>
