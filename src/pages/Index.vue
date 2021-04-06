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
        <q-carousel-slide :name="1" img-src="/images/maigari1.jpg">
          <div
            style="height: 80vh"
            class="flex column justify-center items-start q-px-xl"
          >
            <span
              class="text-white text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Manzo Maigari
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Purpose. Passion.
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Values. Impact.
            </span>
            <span class="text-white text-body1 my-font-montserrat-light"
              >Making African lives worth living through job creation,</span
            >
            <span class="text-white text-body1 my-font-montserrat-light"
              >empowerment, mentoring and skill development.</span
            >
            <a
              href="#"
              class="custom__btn-pink text-pink text-uppercase my-font-montserrat-regular q-mt-md"
              >Get To Know Me</a
            >
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="/images/maigari7.jpg">
          <div
            style="height: 80vh"
            class="flex column justify-center items-start q-px-xl"
          >
            <span
              class="text-white text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Manzo Maigari
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Purpose. Passion.
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Values. Impact.
            </span>
            <span class="text-white text-body1 my-font-montserrat-light"
              >Making African lives worth living through job creation,</span
            >
            <span class="text-white text-body1 my-font-montserrat-light"
              >empowerment, mentoring and skill development.</span
            >
            <a
              href="#"
              class="custom__btn-pink text-pink text-uppercase my-font-montserrat-regular q-mt-md"
              >Get To Know Me</a
            >
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" img-src="/images/maigari8.jpg">
          <div
            style="height: 80vh"
            class="flex column justify-center items-end q-px-xl"
          >
            <span
              class="text-white text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Manzo Maigari
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Purpose. Passion.
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Values. Impact.
            </span>
            <span class="text-white text-body1 my-font-montserrat-light"
              >Making African lives worth living through job creation,</span
            >
            <span class="text-white text-body1 my-font-montserrat-light"
              >empowerment, mentoring and skill development.</span
            >
            <a
              href="#"
              class="custom__btn-pink text-pink text-uppercase my-font-montserrat-regular q-mt-md"
              >Get To Know Me</a
            >
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" img-src="/images/maigari4.jpg">
          <div
            style="height: 80vh"
            class="flex column justify-center items-end q-px-xl"
          >
            <span
              class="text-white text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Manzo Maigari
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Purpose. Passion.
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Values. Impact.
            </span>
            <span class="text-white text-body1 my-font-montserrat-light"
              >Making African lives worth living through job creation,</span
            >
            <span class="text-white text-body1 my-font-montserrat-light"
              >empowerment, mentoring and skill development.</span
            >
            <a
              href="#"
              class="custom__btn-pink text-pink text-uppercase my-font-montserrat-regular q-mt-md"
              >Get To Know Me</a
            >
          </div>
        </q-carousel-slide>
        <!-- <q-carousel-slide :name="5" img-src="/images/maigari5.jpg">
          <div
            style="height: 80vh"
            class="flex column justify-center items-start q-px-xl"
          >
            <span
              class="text-white text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Manzo Maigari
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Purpose. Passion.
            </span>
            <span
              class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Values. Impact.
            </span>
            <span class="text-white text-body1 my-font-montserrat-light"
              >Making African lives worth living through job creation,</span
            >
            <span class="text-white text-body1 my-font-montserrat-light"
              >empowerment, mentoring and skill development.</span
            >
            <a
              href="#"
              class="custom__btn-pink text-pink text-uppercase my-font-montserrat-regular q-mt-md"
              >Get To Know Me</a
            >
          </div>
        </q-carousel-slide> -->
      </q-carousel>
    </header>
    <section>
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 q-px-xl q-py-xl">
          <q-card class="shadow-5" square>
            <q-card-section class="q-pa-md">
              <div
                class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
              >
                Purpose. Passion.
              </div>
              <div class="text-subtitle2 my-font-montserrat-extraBold">
                Manzo maigari is a man of purpose and passion that...
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-body2 my-font-montserrat-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium voluptate odit ea ullam quas molestias, quibusdam
                nostrum maiores obcaecati repellat ipsum et rerum facilis
                consequuntur itaque sit doloribus. Corrupti similique obcaecati
                nihil, earum cumque sed cum placeat dolorum laboriosam
                reiciendis doloremque laudantium alias asperiores molestiae
                incidunt aliquam maiores at veniam. Quisquam animi sequi, modi
                alias, ipsum asperiores eos similique magni corrupti assumenda
                dolore quidem, in obcaecati officiis voluptatibus dolorum ad
                excepturi delectus natus hic. Perspiciatis labore eum impedit
                minima animi iste at excepturi facilis neque sapiente, vitae
                culpa facere ad exercitationem, deleniti placeat nisi
                reprehenderit odio cum! Nostrum veniam omnis quis repudiandae
                nesciunt quidem adipisci. Tempore voluptatibus reprehenderit
                minus dolores magni magnam, consequatur iste adipisci corrupti
                maxime odit harum exercitationem nulla. Deserunt autem quam
                debitis quo minus pariatur quae rem nulla, esse fugit iste
                provident similique quaerat et laudantium magni amet, aliquid
                quos cupiditate dolorem cum. Unde ratione accusantium autem
                quasi, harum voluptates laboriosam earum eaque laborum minus hic
                iure enim alias voluptatum in eveniet provident magnam
                explicabo, est sed saepe doloremque possimus? Incidunt rerum
                laborum natus quos ab possimus blanditiis a. Laudantium vitae
                cupiditate id. Odio amet a voluptates velit officiis. Tenetur
                suscipit at dolorem eum maiores ullam deserunt?
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 q-px-xl q-py-xl">
          <q-img
            src="/images/maigari1.jpg"
            spinner-color="pink"
            spinner-size="30px"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 q-px-xl q-py-xl">
          <q-img
            src="/images/maigari2.jpg"
            spinner-color="pink"
            spinner-size="30px"
          />
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 q-px-xl q-py-xl">
          <q-card class="shadow-5" square>
            <q-card-section class="q-pa-md">
              <div
                class="text-pink text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
              >
                Values. Impact.
              </div>
              <div class="text-subtitle2 my-font-montserrat-extraBold">
                Manzo maigari is a man of value and impact that...
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-body2 my-font-montserrat-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium voluptate odit ea ullam quas molestias, quibusdam
                nostrum maiores obcaecati repellat ipsum et rerum facilis
                consequuntur itaque sit doloribus. Corrupti similique obcaecati
                nihil, earum cumque sed cum placeat dolorum laboriosam
                reiciendis doloremque laudantium alias asperiores molestiae
                incidunt aliquam maiores at veniam. Quisquam animi sequi, modi
                alias, ipsum asperiores eos similique magni corrupti assumenda
                dolore quidem, in obcaecati officiis voluptatibus dolorum ad
                excepturi delectus natus hic. Perspiciatis labore eum impedit
                minima animi iste at excepturi facilis neque sapiente, vitae
                culpa facere ad exercitationem, deleniti placeat nisi
                reprehenderit odio cum! Nostrum veniam omnis quis repudiandae
                nesciunt quidem adipisci. Tempore voluptatibus reprehenderit
                minus dolores magni magnam, consequatur iste adipisci corrupti
                maxime odit harum exercitationem nulla. Deserunt autem quam
                debitis quo minus pariatur quae rem nulla, esse fugit iste
                provident similique quaerat et laudantium magni amet, aliquid
                quos cupiditate dolorem cum. Unde ratione accusantium autem
                quasi, harum voluptates laboriosam earum eaque laborum minus hic
                iure enim alias voluptatum in eveniet provident magnam
                explicabo, est sed saepe doloremque possimus? Incidunt rerum
                laborum natus quos ab possimus blanditiis a. Laudantium vitae
                cupiditate id. Odio amet a voluptates velit officiis. Tenetur
                suscipit at dolorem eum maiores ullam deserunt?
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section class="custom__bg-quote flex justify-center items-center q-px-xl">
      <span class="text-h5 text-center text-white my-font-montserrat-light">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempore.
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum, explicabo." -
        <span class="text-pink">Dr. Manzo Maigari</span></span
      >
    </section>
    <section class="q-px-xl">
      <h3
        class="text-h4 text-uppercase text-pink text-center my-font-montserrat-bold"
      >
        Interview with Manzo Maigari
      </h3>
      <h6 class="text-body1 text-center my-font-montserrat-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, iste.
      </h6>
      <div class="row">
        <div class="col q-pa-md">
          <q-card square class="shadow-5">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/NJs_Gd80EBQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <q-card-section
              class="text-body1 text-center my-font-montserrat-light"
            >
              Lorem ipsum dolor sit amet
            </q-card-section>
          </q-card>
        </div>
        <div class="col q-pa-md">
          <q-card square class="shadow-5">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/NJs_Gd80EBQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <q-card-section
              class="text-body1 text-center my-font-montserrat-light"
            >
              Lorem ipsum dolor sit amet
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section class="q-pt-xl">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 bg-red-7">
          <q-card flat square class="q-pa-xl bg-red-7 text-white">
            <h3 class="text-center text-h5 my-font-montserrat-extraBold">
              MY VALUES
            </h3>
            <q-separator class="bg-white" spaced inset />
            <p class="text-center text-body1 my-font-montserrat-light">
              Make a Positive Impact on Everyone I meet and everywhere I go. Be
              a Solution Provider and not a part of the problem to be solved. Be
              a Role Model Worthy of Emulation Be my best in all that I do
              Particularly the things I am Naturally good at. Do the right
              things at all times, regardless of who is doing the wrong thing
              Value time and make the best use of it Care & Show respect to all
              through my words and actions Consciously build a great legacy,
              starting now, today & everyday Live a life of integrity and honour
              Make my family, my Nation & my God proud.
            </p>
            <q-separator class="bg-white" spaced inset />
          </q-card>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <q-card square flat class="q-pa-xl bg-grey-10">
            <q-card-section class="row">
              <div class="col-1">
                <q-icon size="md" color="red-7" name="ion-sync" />
              </div>
              <div class="col">
                <h6
                  class="q-ma-none my-font-montserrat-bold text-body1 text-white"
                >
                  PURPOSE
                </h6>
                <p class="my-font-montserrat-light text-body2 text-white">
                  Raise a Generation that is Empowered Motivated and Stirred to
                  Operate with Natural Excellence. (GEMSTONE)
                </p>
              </div>
            </q-card-section>
            <q-card-section class="row">
              <div class="col-1">
                <q-icon size="md" color="red-7" name="ion-compass" />
              </div>
              <div class="col">
                <h6
                  class="q-ma-none my-font-montserrat-bold text-body1 text-white"
                >
                  MISSION
                </h6>
                <p class="my-font-montserrat-light text-body2 text-white">
                  Help NATION BUILDERS live a lifestyle of LEADERSHIP &
                  EXCELLENCE for ACCELERATED DEVELOPMENT (L.E.A.D) in their
                  Personal & Professional Lives as we collectively build Nigeria
                  into a most desirable Nation to live in.
                </p>
              </div>
            </q-card-section>
            <q-card-section class="row">
              <div class="col-1">
                <q-icon size="md" color="red-7" name="ion-eye" />
              </div>
              <div class="col">
                <h6
                  class="q-ma-none my-font-montserrat-bold text-body1 text-white"
                >
                  VISION
                </h6>
                <p class="my-font-montserrat-light text-body2 text-white">
                  Build Nigeria into a most desirable Nation to live in by
                  Wednesday, December 31st 2025.
                </p>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="bg-pink q-pa-xl">
        <div class="row">
          <div class="col-md-8 col-sm-12 col-xs-12 row items-center">
            <p class="text-white text-h5 my-font-montserrat-light gt-sm">
              WANT TO GET IN TOUCH WITH ME?
            </p>
          </div>
          <div
            class="col-md-4 col-sm-12 col-xs-12 row items-center justify-center"
          >
            <a
              href="#"
              class="custom__btn-white text-white text-uppercase my-font-montserrat-regular q-mt-md"
              >Contact Me</a
            >
          </div>
        </div>
      </div>
    </section>
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

.custom__btn-white--small {
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid white;
}
.custom__bg-quote {
  height: 300px;
  background: url("/images/rect1.svg");
}
</style>