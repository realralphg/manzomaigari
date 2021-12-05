<template>
  <q-page>
    <section class="header">
      <Curved />
    </section>

    <section class="quote">
      <blockquote>
        The man who comes back through the door in the wall will never be quite
        the same as the man who went out.
      </blockquote>
      <cite>Aldous Huxley</cite>
    </section>

    <section class="about section" id="about">
      <div class="about__container container grid">
        <div class="about__data">
          <h2 class="section__title about__title">
            About
            <!-- More Information <br />
              About Us -->
          </h2>
          <!-- <h4>Community, Technology, Creativity, Finance & more...</h4> -->
          <p class="about__description">
            We are a team of innovators who have gained a reputation in
            delivering quality services by delivering time critical solutions to
            solve urban and rural problems, while continuously evolving to match
            the emerging digital and creative trend. We have a dedicated team of
            high-quality professionals who constantly work with diverse
            industrial players in varied sectors like cyber security, blockchain
            technology, health, agriculture, biometrics, education, banking etc.
          </p>
          <!-- <a href="about.html" class="button">More About Us</a> -->
        </div>
        <div class="about__img" data-aos="zoom-in">
          <img src="images/maigari2.jpg" alt="" />
        </div>
      </div>
    </section>

    <!-- <section>
      <Animecard />
    </section> -->

    <section class="con">
      <div class="q-pa-xl  text-white my-font-poppins-regular">
        <div class="row footer-row">
          <div class="col-md-3 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <!-- <div class="text-body1 text-bold">About</div> -->
            <div class="my-font-montserrat-thin text-h4">Manzo Maigari</div>
            <!-- <q-separator class="bg-grey-9" style="width: 80%" /> -->
            <div
              class="q-mt-md q-pr-xl my-font-montserrat-light text-body2 text-white"
            >
              Make a Positive Impact on Everyone I meet and everywhere I go. Be
              a Solution Provider and not a part of the problem to be solved. Be
              a Role Model Worthy of Emulation Be my best in all that I do
              Particularly the things I am Naturally good at.
            </div>
          </div>

          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 my-font-montserrat-light">About</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
            >
              Home
            </div>
            <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/about')"
            >
              About
            </div>
            <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/blog')"
            >
              Blog
            </div>
            <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/media')"
            >
              Media
            </div>
            <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/contact')"
            >
              Contact Me
            </div>
          </div>

          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 my-font-montserrat-light">Resources</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/blog')"
            >
              Blog
            </div>
            <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/project')"
            >
              Projects
            </div>
          </div>
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 my-font-montserrat-light">Social Media</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-facebook"
                style="font-size: 2em"
              />
              <span class="q-ml-sm my-font-montserrat-light">Facebook</span>
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-twitter"
                style="font-size: 2em"
              />
              <span class="q-ml-sm my-font-montserrat-light">Twitter</span>
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-instagram"
                style="font-size: 2em"
              />
              <span class="q-ml-sm my-font-montserrat-light">Instagram</span>
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-linkedin"
                style="font-size: 2em"
              />
              <span class="q-ml-sm my-font-montserrat-light">Linkedin</span>
            </div>
          </div>
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 my-font-montserrat-light">Contact Info</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div class="text-body2 my-font-montserrat-light q-mt-md">
              Head Office: No 26 Lake Chad Crescent Maitama, Abuja Nigeria.
            </div>
            <div class="text-body2 q-mt-md my-font-montserrat-light">
              <span>Email: </span>
              <span class="text-primary">support@nabg.org</span>
            </div>
            <div class="text-body2 q-mt-md my-font-montserrat-light">
              <span>Phone: </span>
              <span class="text-primary">+234 807 777 7777</span>
            </div>
          </div>
        </div>
        <q-separator class="bg-grey-9 q-px-xl q-mt-xl" />
        <div class="text-caption text-grey-6 my-font-montserrat-light">
          © 2021 Manzo Maigari. All rights reserved.
        </div>
        <div class="text-caption text-grey-6 my-font-montserrat-light">
          By Greysoft© Technologies.
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import Curved from "../components/Curved.vue";
import Animecard from "../components/Animecard.vue";
export default {
  components: {
    Curved,
    Animecard
  }
};
</script>

<style>
.con {
  background-color: #333 !important;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 60px "Oswald", sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px;
}

.quote {
  font-family: "Special Elite", cursive;
  background: #fffdf5;
  color: #3f3f5a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

blockquote {
  font-weight: 100;
  font-size: 2rem;
  max-width: 600px;
  line-height: 1.4;
  position: relative;
  margin: 0;
  padding: 0.5rem;
}

blockquote:before,
blockquote:after {
  position: absolute;
  color: #f1efe6;
  font-size: 8rem;
  width: 4rem;
  height: 4rem;
}

blockquote:before {
  content: "“";
  left: -5rem;
  top: -2rem;
}

blockquote:after {
  content: "”";
  right: -5rem;
  bottom: 1rem;
}

cite {
  line-height: 3;
  text-align: left;
}

.about h4 {
  font-weight: 400;
}

.about .button {
  border-radius: 8px;
  background: linear-gradient(
    243.56deg,
    rgba(141, 53, 74, 0.94) 33.39%,
    rgba(200, 2, 50, 0.68) 113.06%
  );
  /* background-color: #ab042c !important; */
  /* background-color: #ff6464 !important; */
  /* margin: 1rem !important; */
}
.grid {
  display: grid;
  gap: 1.5rem;
}
.about i {
  margin-left: 3rem;
}
.about__data {
  text-align: center;
  min-width: 400px;
}

.about__container {
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2.5rem;
  place-items: center;
  gap: 2rem;
  /* gap: 3.5rem; */
}

/* .about__container {
  margin-bottom: var(--mb-2);
} */

.about__description {
  margin-bottom: var(--mb-2);
  font-size: var(--normal-font-size);
  line-height: 1.5;
  font-weight: 300;
  /* font-size: 14px; */
}
.about__img {
  display: flex;
  column-gap: 1rem;
  align-self: center;
  justify-content: center;
  /* border-radius: 50%; */
}
.about__img img {
  border-radius: 50%;
}

/* Begin Media Queries*/

@media screen and (max-width: 569px) {
  .text-h4 {
    font-size: 1.125rem !important;
  }

  .footer-row {
    text-align: center;
  }
  .q-pr-xl {
    padding-right: 0px !important
    ;
  }

  .text-caption {
    text-align: center !important;
  }

  .section-header {
    font: 300 20px "Oswald", sans-serif;
    padding: 0 1rem;
    margin: 1rem 0;
  }
}
</style>
