<template>
  <q-page class="about">

    <div class="section-title text-center q-py-lg">
            <!-- <h2 class="text-center">
              My Perspectives
            </h2> -->
        <h2><span class="perp text-primary"> Manzo Fellows </span></h2>
    </div>
    <!-- <section class="headerr">
      <h1 class="about-me text-primary">Fellowship</h1>
      <div class="quote">
        <blockquote>
          The man who comes back through the door in the wall will never be
          quite the same as the man who went out.
        </blockquote>
        <cite class="text-primary">Aldous Huxley</cite>
      </div>
    </section> -->

    <!-- <section class="quote">
      
    </section> -->

    <section class="abouttt section" id="about">
      <div class="about__container restore container grid">
        <div class="about__data">
          <h2 class="section__title about__title text-primary">
              The Fellowship
              <!-- More Information <br />
              About Us -->
          </h2>
          <!-- <h4>Community, Technology, Creativity, Finance & more...</h4> -->
          <p class="aboutt about__description text-body1">
            The Manzo Fellowship program is designed to mentor young Africans towards self discovery and fulfilling purpose. Each meeting is carefully tailored in such a way that it fuels individual ambition and equips each fellow with all the necessary skills required for living life to its fullest potential and leading in their various spheres of influence. <br> <br>

            Asides one on one mentoring sessions with Dr. Manzo, other seasoned professionals from across the world are carefully chosen to anchor sessions through in-person forums and virtual workshops.
          </p>
          <!-- <a href="about.html" class="button">More About Us</a> -->
        </div>
        <div class="about__img" data-aos="zoom-in">
          <img src="/images/fellowship.jpg" class="drr" alt="" />
        </div>
      </div>
    </section>


    <section class="about section" id="about">
        <div class="about__container container grid fle">
            <div class="about__img" data-aos="zoom-in">
            <img src="/images/member.png" class="drr" alt="" />
            <!-- <div class="about__img-overlay">
                <img src="pe/about1.jpg" alt="" class="about__img-one img-1" />
              </div>
              <div class="about__img-overlay">
                <img src="pe/home1.jpg " alt="" class="about__img-two" />
              </div> -->
          </div>
          
          <div class="about__data">
            <h2 class="section__title about__title text-primary">
              Become a Fellow
              <!-- More Information <br />
              About Us -->
            </h2>
            <!-- <h4>Community, Creatives, Finance & more</h4> -->
            <p class="aboutt about__description text-body1">
              To become a Manzo Fellow, you are required to write a comprehensive 700 words (max) article telling us about yourself and why you are applying for this fellowship. Please be clear about how this fellowship will help you achieve your personal and professional goals.

              Send article via email to <span class="text-primary">manzofellows@manzomaigari.com</span> 
              

            </p>
            <!-- <ul>
              <li>+ Membership Card</li>
              <li>+ Security</li>
              <li>+ Growing Global Community</li>
              <li>+ Greyhobb office address</li>
            </ul>
            <div class="disclaimer">
              <h5 >Disclaimer</h5>
              <p>Do not use our office address on CAC incorporation documents.</p>
            </div>
            <a href="greyhobb.html" class="button">Learn More</a> -->
          </div>
          
          <!-- <div class="about__img" data-aos="zoom-in">
              <img src="/Website Design 1.svg" alt="">
            <div class="about__img-overlay">
              <img src="pe/about1.jpg" alt="" class="about__img-one img-1" />
            </div>
            <div class="about__img-overlay">
              <img src="pe/home1.jpg " alt="" class="about__img-two" />
            </div>
          </div> -->
          
            
          </div>
        </div>
    </section>

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
              @click="$router.push('/fellowship')"
            >
              Fellowship
            </div>
            <!-- <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/media')"
            >
              Media
            </div> -->
            <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/contact')"
            >
              Contact
            </div>
          </div>

          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 my-font-montserrat-light">Resources</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/contact')"
            >
              FAQ
            </div>
            <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/contact')"
            >
              Send a message
            </div>
          </div>
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 my-font-montserrat-light">Social Media</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div class="text-body2 q-mt-md cursor-pointer">
              <a
                class=" my-font-montserrat-light text-white text-center"
                href="http://facebook.com"
                target="_blank"
              >
              <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-facebook"
                style="font-size: 2em"
              />
              <span class="q-ml-sm my-font-montserrat-light">Facebook</span> </a>
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <a
                class=" my-font-montserrat-light text-white text-center"
                href="http://twitter.com"
                target="_blank"
              >
              <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-twitter"
                style="font-size: 2em"
              />
              <span class="q-ml-sm my-font-montserrat-light">Twitter</span> </a>
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <a
                class=" my-font-montserrat-light text-white text-center"
                href="http://instagram.com"
                target="_blank"
              >
              <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-instagram"
                style="font-size: 2em"
              />
              <span class="q-ml-sm my-font-montserrat-light">Instagram</span> </a>
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <a
                class=" my-font-montserrat-light text-white text-center"
                href="http://linkedin.com"
                target="_blank"
              >
              <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-linkedin"
                style="font-size: 2em"
              />
              <span class="q-ml-sm my-font-montserrat-light">Linkedin</span></a>
            </div>
          </div>
          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 my-font-montserrat-light">Contact Info</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div class="text-body2 my-font-montserrat-light q-mt-md">
              31, Gwari Avenue, Barnawa, Kaduna, Nigeria.
            </div>
            <div class="text-body2 q-mt-md my-font-montserrat-light">
              <span>Email: </span>
              <span class="text-primary">manzo@manzomaigari.com</span>
            </div>
            <!-- <div class="text-body2 q-mt-md my-font-montserrat-light">
              <span>Phone: </span>
              <span class="text-primary">+234 807 777 7777</span>
            </div> -->
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
import Simple from "../components/Simple.vue";
export default {
  components: {
    Curved,
    Animecard,
    Simple
  }
};
</script>

<style>
.about {
  background-color: #333 !important;
}

.abouttt {
  font-size: 16px;
  font-weight: 400;

  margin: 2rem 0 2rem !important ;
}

.about-me {
  margin: 0 !important;
  font-size: 5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 0em;
  font-weight: 900;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 60px sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
}


.headerr {
  position: relative;
  height: 100vh;
  /* background: url("/images/dr333.jpg") center center/cover no-repeat; */
  background-attachment: fixed;
}
.restore {
  margin-top: 0 !important;
}

.about h4 {
  font-weight: 400;
}

.drr {
  border-radius: 8px !important;
}

.grid {
  display: grid;
  gap: 1.5rem;
  place-items: center;
}

.fle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.about__img {
  flex: 1;
}
.about__data {
  flex: 1;
}

@media (max-width: 867px) {
  .fle {
    flex-direction: column;
    flex-direction: column-reverse;
  }
}

.cardsss {
  width: 100% !important;
  width: calc((100% / 3) - 30px);
  margin: 0 15px 30px;
  padding: 30px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  min-height: 200px;
  z-index: 1;
  box-shadow: #f2c037;
  background-color: #f2c037;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.cardsss h5 {
  font-size: 30px;
  font-weight: 500;
  text-transform: capitalize;
  margin: 10px 0 10px;
}
.cardsss p {
  font-size: 16px;
}

.cardss i {
  margin: 1rem 0;
}
.cardsss:hover {
  transform: scale(1.1);
}

.grider {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: left;
  color: #fff;
  /* border: 2px solid #ffdb58; */
  padding: 1rem;
}

.cli .grider {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.cli .grider > *:first-child {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}

.card-grid h2 {
  margin: 1rem 0;
  font-size: 2.5rem;
}
.card-grid {
  background: #5e5c5c;
  padding: 2rem;
  border-radius: 8px;
  /* border: 2px solid #ffdb58; */
}

@media screen and (max-width: 700px) {
  .grider,
  .cli .grider {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .cli .grider > *:first-child {
    grid-column: 1;
    grid-row: 1;
  }
  .features-main .grid > *:first-child,
  .features-main .grid > *:nth-child(2) {
    grid-column: 1;
  }
  .about-me {
    font-size: 2rem;
  }
  .about__container {
    background-color: #333;
    grid-template-columns: 1fr !important;
    margin-top: 2rem !important;
  }
  .about__data {
    min-width: 200px !important;
    text-align: center;
  }

  .about__data h2 {
    text-align: center;
  }

  .about__title {
    /* line-height: 1rem; */
    text-align: center;
  }
  .about__description {
    text-align: center;
  }
}

.about i {
  margin-left: 3rem;
}
.about__data {
  text-align: left;
  min-width: 400px;
  color: #fff;
}

.about-title {
  line-height: 1rem;
}

.about__container {
  background-color: #333;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2.5rem;
  place-items: center;
  gap: 2rem;
  margin-top: 7rem;
  /* gap: 3.5rem; */
}

/* .about__container {
  margin-bottom: var(--mb-2);
} */

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
