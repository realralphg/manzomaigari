<template>
  <q-layout view="lHh Lpr lFf">
    <!--Work on reveal and reveal offset-->
    <q-header reveal :reveal-offset="500">
      <q-toolbar class="text-white bg-grey-10">
        <div class="my-font-montserrat-thin text-h4 logo q-pa-sm">
          Manzo Maigari
        </div>
        <q-space />
        <q-tabs narrow-indicator dense active-color="yellow-14">
          <q-route-tab
            label="Home"
            sm
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-montserrat-light"
            to="/"
            exact
          />
          <q-route-tab
            label="About"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-montserrat-light"
            to="/about"
            exact
          />
          <!-- <q-route-tab
            label="Blog"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-montserrat-light"
            to="/membership"
            exact
          /> -->
          <q-route-tab
            label="Fellowship"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-montserrat-light"
            to="/Fellowship"
            exact
          />
          <q-route-tab
            label="Contact"
            ripple
            no-caps
            class="gt-sm q-mx-sm my-font-montserrat-light"
            to="/contact"
            exact
          />
        </q-tabs>
        <div class=" lt-md">
          <q-btn flat round dense icon="menu" class="q-mr-sm">
            <q-menu>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Home"
                        to="/"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-montserrat-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="About"
                        to="/about"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-montserrat-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="fellowship"
                        to="/fellowship"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-montserrat-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <!-- <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Membership"
                        to="/membership"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-montserrat-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item> -->
                <!-- <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Leadership"
                        to="/leadership"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-montserrat-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item> -->
                <!-- <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Partners"
                        to="/partner"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-montserrat-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item> -->
                <!-- <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="News"
                        to="/news"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-montserrat-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item> -->
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Contact"
                        to="/contact"
                        no-caps
                        size="md"
                        class="q-mx-sm my-font-montserrat-light"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>

<style lang="scss">
@media (max-width: 500px) {
  .logo {
    font-size: 1.3rem;
  }
}

@font-face {
  font-family: montserrat-black;
  src: url("/fonts/montserrat/Montserrat-Black.ttf");
}

@font-face {
  font-family: montserrat-extraBold;
  src: url("/fonts/montserrat/Montserrat-ExtraBold.ttf");
}

@font-face {
  font-family: montserrat-bold;
  src: url("/fonts/montserrat/Montserrat-Bold.ttf");
}

@font-face {
  font-family: montserrat-regular;
  src: url("/fonts/montserrat/Montserrat-Regular.ttf");
}

@font-face {
  font-family: montserrat-italic;
  src: url("/fonts/montserrat/Montserrat-Italic.ttf");
}

@font-face {
  font-family: montserrat-boldItalic;
  src: url("/fonts/montserrat/Montserrat-BoldItalic.ttf");
}

@font-face {
  font-family: montserrat-light;
  src: url("/fonts/montserrat/Montserrat-Light.ttf");
}

@font-face {
  font-family: montserrat-extraLight;
  src: url("/fonts/montserrat/Montserrat-ExtraLight.ttf");
}

@font-face {
  font-family: montserrat-thin;
  src: url("/fonts/montserrat/Montserrat-Thin.ttf");
}

@font-face {
  font-family: greatvibes-regular;
  src: url("/fonts/greatvibes/GreatVibes-Regular.ttf");
}

.my-font-montserrat-black {
  font-family: "montserrat-black";
}

.my-font-montserrat-extraBold {
  font-family: "montserrat-extraBold";
}

.my-font-montserrat-bold {
  font-family: "montserrat-bold";
}

.my-font-montserrat-regular {
  font-family: "montserrat-regular";
}

.my-font-montserrat-italic {
  font-family: "montserrat-italic";
}

.my-font-montserrat-boldItalic {
  font-family: "montserrat-boldItalic";
}

.my-font-montserrat-light {
  font-family: "montserrat-light";
}

.my-font-montserrat-extraLight {
  font-family: "montserrat-extraLight";
}

.my-font-montserrat-thin {
  font-family: "montserrat-thin";
}

.my-font-greatvibes-regular {
  font-family: "greatvibes-regular";
}
</style>
