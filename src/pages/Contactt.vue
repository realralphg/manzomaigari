<template>
  <q-page class="con">
    <section id="contact">
      <h1 class="section-header">Contact</h1>

      <div class="wrapie container">
        <div class="immg">
          <img src="/images/hhh.jpg" alt="" />
        </div>
        <div class="contact-wrapper">
          <!-- Left contact page -->

          <form id="contact-form" class="form-horizontal" role="form">
            <div class="form-group col-md-2 col-sm-12 col-xs-12">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  name="name"
                  value=""
                  required
                  autocomplete="off"
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value=""
                  required
                  autocomplete="off"
                />
              </div>
            </div>

            <textarea
              class="form-control"
              rows="10"
              placeholder="Message"
              name="message"
              required
            ></textarea>

            <button
              class="btn btn-primary send-button bg-primary"
              id="submit"
              type="submit"
              value="Send"
            >
              <div class="alt-send-button">
                <i class="fa fa-paper-plane"></i
                ><span class="send-text">Send</span>
              </div>
            </button>
          </form>

          <!-- Left contact page -->

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x text-primary"
                  ><span class="contact-text place">Abuja, Nigeria</span></i
                >
              </li>

              <li class="list-item">
                <i class="fa fa-envelope fa-2x text-primary"
                  ><span class="contact-text gmail"
                    ><a href="mailto:#" title="Send me an email"
                      >manzo@manzomaigari.com</a
                    ></span
                  ></i
                >
              </li>
            </ul>

            <hr />
            <ul class="social-media-list">
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fab fa-github" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fab fa-codepen" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fab fa-twitter" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fab fa-instagram" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
            <hr />

            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </div>
    </section>

    <section>
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
export default {};
</script>

<style>
.con {
  background-color: #333 !important;
}

.container {
  max-width: 1440px;
  width: 95%;
  margin: 0 auto;
}

#contact {
  width: 100%;
  height: 100%;
  /* background-color: #333; */
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 60px sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px;
}
.wrapie {
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
}

.wrapie .immg img {
  width: 100%;
  height: 400px;
  border-radius: 50%;
  /* min-height: 400px; */
  object-fit: contain;
}

@media (max-width: 500px) {
  .wrapie .immg img {
    height: 100%;
  }
}
.contact-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 1rem auto; */
  padding: 20px;
  position: relative;
  max-width: 840px;
}

/* Left contact page */
.form-horizontal {
  /*float: left;*/
  max-width: 400px;
  font-family: "Lato";
  font-weight: 400;
}

.form-control,
textarea {
  width: 100%;
  padding: 10px 20px;
  /* max-width: 400px; */
  background-color: #333;
  color: #fff;
  letter-spacing: 1px;
  margin: 1rem 0;
}
.form-control:focus,
textarea:focus {
  outline: none;
}
.form-control::placeholder,
textarea::placeholder {
  color: #fff;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.alt-send-button {
  width: 100%;
  /* width: 400px; */
  height: 34px;
  transition: all 0.2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px "Lato", sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -20px;
  padding-right: 20px;
}

.list-item {
  line-height: 2;
  color: #aaa;
  margin: 1rem 0;
}

.contact-text {
  font: 300 18px sans-serif;
  letter-spacing: 1.9px;
  color: #bbb;
}

.place {
  margin-left: 20px;
}

.phone {
  margin-left: 20px;
}

.gmail {
  margin-left: 20px;
}

.contact-text a {
  color: #bbb;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #fff;
  text-decoration: none;
}

/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative;
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27, 27, 27);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  /* background: #ffdb58; */
  color: #fff;
  box-shadow: 0 0 0 1px #ffdb58;
  transition: all 0.2s ease-in-out;
}

/* .social-media-list li:hover {
  background-color: #fff;
  color: #fff;
} */

.social-media-list li:hover:after {
  color: #fff;
  opacity: 1;
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.social-media-list li:hover a {
  color: #fff;
}

.copyright {
  font: 200 14px "Oswald", sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255, 255, 255, 0.6);
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container,
  .form-horizontal {
    margin: 0 auto;
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {
  .text-h4 {
    font-size: 1.125rem !important;
  }
  .direct-contact-container,
  .form-wrapper {
    float: none;
    margin: 0 auto;
  }
  .form-control,
  textarea {
    margin: 1rem auto;
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

  .name,
  .email,
  textarea {
    width: 100%;
    /* width: 280px; */
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
  .section-header {
    font: 300 20px "Oswald", sans-serif;
    padding: 0 1rem;
    margin: 1rem 0;
  }
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
</style>
