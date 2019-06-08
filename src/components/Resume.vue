<template>
  <div class="resume-container">
    <div class="resume-title">
      <h1>RESUME</h1>
    </div>
    <div class="resume-content">
      <div class="circle-flex-container skills-container">
        <div class="my-circles">
          <div class="circles">
            <span>SKILLS</span>
          </div>
          <div class="title-div">
            <h3>SKILLS</h3>
          </div>
        </div>
        <div class="skills">
          <ul>
            <p>
              <strong>Teh. Languages:</strong>
            </p>
            <li>
              <i class="fab fa-php"></i>PHP
            </li>
            <li>
              <i class="fab fa-js-square"></i>JavaScript, ES6
            </li>
            <li>
              <i class="fab fa-html5"></i>HTML5
            </li>
            <li>
              <i class="fab fa-css3-alt"></i>CSS3(SASS)
            </li>
            <li>
              <i class="fas fa-database"></i>MySQL
            </li>
          </ul>
        </div>
        <div class="skills">
          <ul>
            <p>
              <strong>Frameworks, CMS:</strong>
            </p>
            <li>
              <i class="fab fa-laravel"></i>Laravel
            </li>
            <li>
              <i class="fab fa-vuejs"></i>ue.js, Vuex
            </li>
            <li>
              <i class="fab fa-wordpress-simple"></i>Wordpress
            </li>
            <li>
              <i class="fab fa-drupal"></i>Drupal
            </li>
          </ul>
        </div>
        <div class="skills">
          <ul>
            <p>
              <strong>Other:</strong>
            </p>
            <li>
              <i class="fab fa-github"></i>Git
            </li>
            <li>
              <i class="fab fa-linux"></i>Linux
            </li>
            <li>
              <i class="fab fa-adobe"></i>Photoshop
            </li>
            <li>
              <img src="https://img.icons8.com/ios/22/000000/gimp.png">Gimp
            </li>
          </ul>
        </div>
        <div class="skills">
          <ul>
            <p>
              <strong>Languages:</strong>
            </p>
            <li>
              <strong>Serbian:</strong> Native
            </li>
            <li>
              <strong>English:</strong> Pre-advanced
            </li>
          </ul>
        </div>
      </div>
      <div class="circle-flex-container">
        <div class="my-circles responsive-circle">
          <div class="circles">
            <span>EDUCATION</span>
          </div>
          <div class="title-div">
            <h3 class="education-title">EDUCATION</h3>
          </div>
        </div>
        <div>
          <div class="education">
            <p>
              <strong>INFORMAL EDUCATION:</strong>
            </p>
            <p>
              <strong>Advanced Web Development Course</strong>
            </p>
            <p>
              <strong>Vivify Academy</strong>
              , Novi Sad
            </p>
            <p>
              <strong>Curriculum:</strong>OOP, Laravel, Vue.js
            </p>
            <p class="curriculum">
              Learned about OOP Design Patterns and principles,
              Laravel, Vue.js(including Vuex and other
              libraries), creating custum RESTful APIs,
              using Axios to consume APIs, using Postman and
              curl to test APIs, building Single Page Applications, Bootstrap,
              implementing
              CORS and JWT.
            </p>
            <p>
              <a class="certificate"
                href="https://i.imgur.com/hsz3zi3.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >Certificate Link</a>
            </p>
            <p>
              <strong>Basic Web Development Course</strong>
            </p>
            <p>
              <strong>Vivify Academy</strong>
              , Novi Sad
            </p>
            <p>
              <strong>Curriculum:</strong>HTML, CSS, PHP, JavaScript, SQL, Git, OOP
            </p>
            <p class="curriculum">
              Learned about procedural and basics of object-oriented programming,
              HTTP protocol, DOM manipulation, handeling asynchronous operations,
              querying database, using version control system.
            </p>
          </div>
          <div class="education">
            <p>
              <strong>FORMAL EDUCATION:</strong>
            </p>
            <p>
              <strong>Faculty of Agriculture</strong>, Novi Sad
            </p>
            <p>
              <strong>Module:</strong> Department of Water Management
            </p>
            <p>2011 - </p>
          </div>
        </div>
      </div>
      <div class="circle-flex-container">
        <div class="my-circles">
          <div class="circles">
            <span class="experience">EXPERIENCE</span>
          </div>
          <div class="title-div">
            <h3>WORK EXPERIENCE</h3>
          </div>
        </div>
        <div class="work-experience">
          <span><h4>Fermicoding</h4>3 months </span>
          <p class="curriculum">Working on live project, website for big American global golf course architects, using  php, JavaScript, jQuery, Drupal, git daily. 
            Working on backend as well as frontend. Project is in final testing faze as soon as it's deployed link will be provided.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.title-div {
  color: #e83556;
}
.resume-title h1 {
  margin-top: 30px;
  font-size: 80px;
}

.circles {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  font-size: 15px;
  color: #fff;
  line-height: 130px;
  text-align: center;
  margin-left: 15px;
  background-color: #ee2b4e;
}
.certificate {
  color: #ee2b4e;
  &:hover {
    color: red;
  }
}
.education {
  margin-left: 38px;
}
.curriculum {
  width: 100%;
}
.education p {
  text-align: left;
}
@media (max-width: 768px) {
  .resume-container {
    margin-left: 15px;
    .resume-title h1 {
      margin-top: 30px;
      margin-left: -24px;
    }
    .title-div {
      margin-right: 15px;
      .education-title {
        margin-right: 27px;
      }
    }
    .skills {
      text-align: left;
      ul {
        padding-left: 0 !important;
      }
    }
  }

  .circle-flex-container {
    display: grid;
    .circles {
      display: none;
    }
  }

  .education {
    margin: 0;
  }
  .responsive-circle {
    margin-left: 35px;
  }
  .work-experience {
    text-align: left;
  }
}
@media (min-width: 769px) {
  .circle-flex-container {
    display: inline-flex;
    .title-div {
      display: none;
    }
  }
}
@media (min-width: 992px) {
  .work-experience {
    .curriculum {
      margin-left: 38px;
    }
  }
  .skills-container {
    margin-left: -68px;
  }
}
@media (min-width: 1200px) {
  .skills-container {
    margin-left: -249px;
  }
}
</style>
