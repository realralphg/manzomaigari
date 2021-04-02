<template>
  <q-page>
    <header>
      <q-carousel
        style="height: calc(100vh - 48px)"
        animated
        v-model="slide"
        arrows
        control-color="white"
        navigation-icon="radio_button_unchecked"
        navigation
        infinite
      >
        <q-carousel-slide :name="1" img-src="/images/Dr. Manzo Maigari3.jpg">
          <div
            style="height: 80vh"
            class="flex column justify-center items-start q-px-xl"
          >
            <span
              class="text-white text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Dr. Manzo Maigari
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Purpose. Passion.
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Mission. Values.
            </span>
            <span class="text-white text-body1 my-font-montserrat-light"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dolorum, magni.</span
            >
            <span class="text-white text-body1 my-font-montserrat-light"
              >Non voluptates voluptate dolorem laborum inventore excepturi
              exercitationem?</span
            >
            <a
              href="#"
              class="custom__btn-pink text-pink text-uppercase my-font-montserrat-regular q-mt-md"
              >Get Started</a
            >
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="/images/Dr. Manzo Maigari1.jpg">
          <div
            style="height: 80vh"
            class="flex column justify-center items-start q-px-xl"
          >
            <span
              class="text-white text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Dr. Manzo Maigari
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Purpose. Passion.
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Mission. Values.
            </span>
            <span class="text-white text-body1 my-font-montserrat-light"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dolorum, magni.</span
            >
            <span class="text-white text-body1 my-font-montserrat-light"
              >Non voluptates voluptate dolorem laborum inventore excepturi
              exercitationem?</span
            >
            <a
              href="#"
              class="custom__btn-pink text-pink text-uppercase my-font-montserrat-regular q-mt-md"
              >Get Started</a
            >
          </div>
        </q-carousel-slide>
      </q-carousel>
    </header>
    <!-- <div style="height: 1000px">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    </div> -->
    <div style="height: 1000px">Yo</div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data: () => ({
    slide: 1,
  }),
};
</script>

<style lang="scss">
.custom__btn-pink {
  text-decoration: none;
  padding: 15px 50px;
  border: 2px solid #ea4b64;
}

.custom__btn-white {
  text-decoration: none;
  padding: 15px 50px;
  border: 2px solid white;
}

.btn {
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;
  border-radius: none;
  border: none;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ea4b64),
    to(#c33f5b)
  );
  background-image: linear-gradient(to right, #ea4b64, #c33f5b);
  color: #fff;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.btn > * {
  display: inline-block;
  height: 100%;
  width: 100%;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.btn__visible {
  padding: 2rem 7.5rem;
}
@media only screen and (max-width: 37.5em) {
  .btn__visible {
    padding: 1rem 3.5rem;
  }
}
.btn__invisible {
  position: absolute;
  padding: 2rem 0;
  left: 0;
  top: -100%;
}
.btn:hover {
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(var(--color-primary-light)),
    to(var(--color-primary-dark))
  );
  background-image: linear-gradient(
    to left,
    var(--color-primary-light),
    var(--color-primary-dark)
  );
}
.btn:hover .btn__visible {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}
.btn:hover .btn__invisible {
  top: 0;
}
.btn:focus {
  outline: none;
  -webkit-animation: pulsate 1s infinite;
  animation: pulsate 1s infinite;
}
</style>