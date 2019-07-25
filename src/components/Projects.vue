<template>
  <div>
    <div class="content">
      <div class="row">
        <div class="col-md-7">
          <div id="carouselExampleControls4" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  :src="require(`@/assets/${'rtj-10.jpg'}`)"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="require(`@/assets/${'rtj-11.jpg'}`)"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="require(`@/assets/${'rtj-9.jpg'}`)" alt="4 slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="require(`@/assets/${'rtj-8.jpg'}`)" alt="5 slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="require(`@/assets/${'rtj-7.jpg'}`)" alt="6 slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="require(`@/assets/${'rtj-6.jpg'}`)" alt="7 slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="require(`@/assets/${'rtj-5.jpg'}`)" alt="8 slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="require(`@/assets/${'rtj-4.jpg'}`)" alt="9 slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="require(`@/assets/${'rtj-3.jpg'}`)" alt="11 slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="require(`@/assets/${'rtj-2.jpg'}`)" alt="22 slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="require(`@/assets/${'rtj-1.jpg'}`)" alt="33 slide" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls4"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls4"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <h3>Robert Trent Jones Golf Course Arhitects</h3>

          <p>
            New and improved web site for global golf course architects. Technologies used are
            <strong>Drupal</strong>,
            <strong>Php</strong>,
            <strong>Javascript</strong>,
            <strong>jQuery</strong>,
            <strong>Scss</strong>.
            My job was mainly related to front-end, creating custom animations, making the site responsive for all devices...
            Also, I had done some work on the back-end, installing new modules and configuring them to the site's needs.
          </p>
        </div>
      </div>

      <hr />
      <div class="row">
        <div class="col-md-7">
          <div id="carouselExampleControls3" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  :src="require(`@/assets/${'diva1.png'}`)"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="require(`@/assets/${'diva2.png'}`)"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="require(`@/assets/${'diva3.png'}`)"
                  alt="Third slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="require(`@/assets/${'diva4.png'}`)"
                  alt="Third slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="require(`@/assets/${'diva5.png'}`)"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls3"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls3"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <h3>Diva Design by Ivana, Blog and Shop Application</h3>

          <p>
            Blog and Shop App for unique handmade jewelery and accessories.
            Website is still in process of building and i'm currently working on it.
            Back-end is done with
            <strong>Laravel.</strong> Front-end with
            <strong>Vue.js</strong>.
          </p>
          <a
            class="btn btn-primary"
            href="https://github.com/sinisam92/diva-design-front-vueJS"
            target="_blank"
            rel="noopener noreferrer"
          >View Website</a>
        </div>
      </div>

      <hr />
      <div class="row">
        <div class="col-md-7">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" :src="require(`@/assets/${'1.png'}`)" alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="require(`@/assets/${'2.png'}`)" alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="require(`@/assets/${'5.png'}`)" alt="Third slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" :src="require(`@/assets/${'6.png'}`)" alt="Third slide" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <h3>Gallery Application</h3>

          <p>
            Single Page Application (SPA) where you can register
            and make your own galleries that you want to share with the world. Front-End is done with
            <strong>Vue.js</strong> and
            Back-End with
            <strong>Laravel.</strong>
            Click on link to see it.
            <a
              style="margin-left:10px;"
              href="https://github.com/sinisam92/gallery-api"
              target="_blank"
              rel="noopener noreferrer"
            >Gallery API</a>
          </p>
          <a
            class="btn btn-primary"
            href="https://github.com/sinisam92/gallery-app"
            target="_blank"
            rel="noopener noreferrer"
          >View Project</a>
        </div>
      </div>

      <hr />

      <div class="row">
        <div class="col-md-7">
          <div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  :src="require(`@/assets/${'metalac1.png'}`)"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="require(`@/assets/${'metalac2.png'}`)"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  :src="require(`@/assets/${'metalac3.png'}`)"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls2"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls2"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col-md-5">
          <h3>Local Handball club website</h3>

          <p>A simple website of the local handball club I made in Wordpress. At that time i was self-taught.</p>
          <a
            class="btn btn-primary"
            href="https://rkmetalac.rs/"
            target="_blank"
            rel="noopener noreferrer"
          >View Website</a>
        </div>
      </div>

      <hr />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.content {
  margin-bottom: 50px;
}
.full-screen-icon {
  width: max-content;
  position: absolute;
  z-index: 999;
  right: 30px;
  top: 30px;
}
</style>
