<template>
  <div class="resume-container">
    <div class="resume-title">
      <h1>RESUME</h1>
    </div>
    <div class="resume-content">
      <div class="circle-flex-container" style="margin-top: 25px;">
        <div class="my-circles">
          <div class="circles">
            <span>SKILLS</span>
          </div>
        </div>
        <div>
          <ul style="text-align: left">
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
              <i class="fab fa-css3-alt"></i>CSS3
            </li>
            <li>
              <i class="fas fa-database"></i>MySQL
            </li>
          </ul>
        </div>
        <div>
          <ul style="text-align: left">
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
          </ul>
        </div>
        <div>
          <ul style="text-align: left">
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
        <div>
          <ul style="text-align: left">
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
      <div class="circle-flex-container" style="margin-top: 25px;">
        <div class="my-circles responsive-circle">
          <div class="circles">
            <span>EDUCATION</span>
          </div>
        </div>
        <div>
          <div class="education" style="margin-top: 25px;">
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
            <p style="width:500px;">
              Learned about OOP Design Patterns and principles,
              Laravel, Vue.js(including Vuex and other
              libraries), creating custum RESTful APIs,
              using Axios to consume APIs, using Postman and
              curl to test APIs, building Single Page Applications, Bootstrap,
              implementing
              CORS and JWT.
            </p>
            <p>
              <a
                href="https://i.imgur.com/hsz3zi3.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >Certificate Link</a>
            </p>
            <p style="margin-top: 35px;">
              <strong>Basic Web Development Course</strong>
            </p>
            <p>
              <strong>Vivify Academy</strong>
              , Novi Sad
            </p>
            <p>
              <strong>Curriculum:</strong>HTML, CSS, PHP, JavaScript, SQL, Git, OOP
            </p>
            <p style="width:500px; margin-top: 20px;">
              Learned about procedural and basics of object-oriented programming,
              HTTP protocol, DOM manipulation, handeling asynchronous operations,
              querying database, using version control system.
            </p>
          </div>
          <div class="education" style="margin-top: 25px;">
            <p>
              <strong>FORMAL EDUCATION:</strong>
            </p>
            <p>
              <strong>Faculty of Agriculture</strong>, Novi Sad
            </p>
            <p>
              <strong>Module:</strong> Department of Water Management
            </p>
            <p>2011 - present</p>
          </div>
        </div>
      </div>
      <div class="circle-flex-container" style="margin-top: 25px;">
        <div class="my-circles">
          <div class="circles">
            <span>WORK EXPIRIANCE</span>
          </div>
        </div>
        <div class="education">
          <p style="vertical-align: middle; line-height: 130px;">No Relevant Work Expirience.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.resume-container {
  margin-left: 150px;
}

.resume-title h1 {
  margin-top: 30px;
  font-size: 80px;
}
.circle-flex-container {
  display: inline-flex;
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
  margin-left: 15px;
  background-color: #ee2b4e;
}

.education {
  margin-left: 38px;
}
.education p {
  text-align: left;
}
@media screen and (max-width: 768px) {
  .resume-container {
    margin-left: 15px;
  }

  .circle-flex-container {
    display: grid;
  }

  .education {
    margin: 0;
  }
  .education p {
    max-width: 280px;
  }
  .responsive-circle {
    margin-left: 35px;
  }
}
</style>
