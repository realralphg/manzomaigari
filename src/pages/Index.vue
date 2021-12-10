<template>
  <q-page class="bg-grey-12">
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
        <q-carousel-slide :name="1" img-src="/images/maigari7.jpg">
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
              class="text-primary text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Purpose. Passion.
            </span>
            <span
              class="text-primary text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Values. Impact.
            </span>
            <span class="text-white text-body1 my-font-montserrat-light"
              >Making African lives worth living through job creation,</span
            >
            <span class="text-white text-body1 my-font-montserrat-light"
              >empowerment, mentoring and skill development.</span
            >
            <q-btn
              to="/about"
              class="text-primary q-my-md q-px-xl q-py-sm"
              outline
              style="color: goldenrod;"
              label="About Manzo"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" img-src="/images/maigari8.jpg">
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
              class="text-primary text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Purpose. Passion.
            </span>
            <span
              class="text-primary text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Values. Impact.
            </span>
            <span class="text-white text-body1 my-font-montserrat-light"
              >Making African lives worth living through job creation,</span
            >
            <span class="text-white text-body1 my-font-montserrat-light"
              >empowerment, mentoring and skill development.</span
            >
            <q-btn
              to="/about"
              class="text-primary q-my-md q-px-xl q-py-sm"
              outline
              style="color: goldenrod;"
              label="About Manzo"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" img-src="/images/maigari4.jpg">
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
              class="text-primary text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Purpose. Passion.
            </span>
            <span
              class="text-primary text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Values. Impact.
            </span>
            <span class="text-white text-r text-body1 my-font-montserrat-light"
              >Making African lives worth living through job creation,</span
            >
            <span class="text-white text-r text-body1 my-font-montserrat-light"
              >empowerment, mentoring and skill development.</span
            >
            <q-btn
              to="/about"
              class="text-primary q-my-md q-px-xl q-py-sm"
              outline
              style="color: goldenrod;"
              label="About Manzo"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" img-src="/images/maigari1.jpg">
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
              class="text-yellow-14 text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Purpose. Passion.
            </span>
            <span
              class="text-yellow-14 text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Values. Impact.
            </span>

            <span class="text-white text-r text-body1 my-font-montserrat-light"
              >Making African lives worth living through job creation,</span
            >
            <span class="text-white text-r text-body1 my-font-montserrat-light"
              >empowerment, mentoring and skill development.</span
            >

            <q-btn
              to="/about"
              class="text-primary q-my-md q-px-xl q-py-sm"
              outline
              style="color: goldenrod;"
              label="About Manzo"
            />
            <!-- <a
              href="#"
              class="custom__btn-pink text-yellow-14 text-uppercase my-font-montserrat-regular q-mt-md"
              >About Manzo</a
            > -->
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

    <!-- <section class="q-mb-lg">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <div class="shadow-5" square>
            <section class="q-pa-md">
              <div
                class="text-dark text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
              >
                About
              </div>
              <div class="text-subtitle2 my-font-montserrat-extraBold">
                Manzo maigari is a man of purpose and passion that...
              </div>
            </section>
            <section>
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
                nesciunt quidem adipisci.
              </div>
            </section>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <section flat square class="bg-white">
            <img alt="executive" src="/images/maigari4.jpg" />
          </section>
        </div>
      </div>
    </section> -->
    <section class="q-mb-lg">
      <div class="row align container">
        <div class="col-md-6 col-sm-12 col-xs-12 q-py-xl  q-py-xs">
          <q-card square>
            <q-card-section>
              <div
                class="text-dark hello text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
              >
                <div class="section-title">
                  <h2><span> About </span></h2>
                </div>
              </div>
              <!-- <div class="text-subtitle2 my-font-montserrat-extraBold">
                Manzo maigari is a man of purpose and passion that...
              </div> -->
            </q-card-section>
            <q-card-section>
              <div class=" aboutt text-body1">
                Manzo Maigari is the Director General, Nigeria Agribusiness
                Group (NABG); Chairman/Chief Executive Officer, Agrolog Limited,
                Greysoft Technologies, Nigeria Advisory Board Agricultural
                Policy and Research in Africa (APRA) and Member, National Action
                Committee, Africa Continental Free Trade Area (ACFTA). He was
                previously the Commissioner for Agriculture & Forestry and for
                Commerce, Industry and Tourismin Kaduna State, Nigeria within
                the period of 2015 - 2019. Dr. Manzo has worked for a variety of
                clients in the public and private sectors in areas relating to
                Government and its Agencies (Local and International), Commerce,
                Agriculture, Technology, Real Estate and Industries with a
                strong arm for policy development and implementation.
              </div>
              <q-btn
                class="about text-primary q-pa-sm"
                to="/about"
                label="Read More"
              />
              <!-- <a 
                class="about custom__btn-pink text-yellow-14 text-uppercase my-font-montserrat-regular q-mt-md"
                href=""
                >Read More</
              > -->
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card flat square class="bg-white">
            <div class="experience__img grid">
              <div class="over">
                <div class="experience__overlay rel">
                  <img
                    src="/images/drm3.jpg"
                    alt=""
                    class="experience__img-one dr"
                  />
                </div>
                <div class="experience__overlay">
                  <img
                    src="/images/dr1.jpg"
                    alt=""
                    class="experience__img-one"
                  />
                </div>
                <div class="experience__overlay">
                  <img
                    src="/images/drm2.jpg"
                    alt=""
                    class="experience__img-two"
                  />
                </div>
              </div>
            </div>
            <!-- <img alt="executive" src="/images/maigari3.jpg" class="dr" /> -->
          </q-card>
        </div>
      </div>
    </section>

    <section class="dr-cards section">
      <div class="section-title text-center q-py-lg">
        <!-- <h2 class="text-center">
              My Perspectives
            </h2> -->
        <h2><span class="perp text-dark"> Passion </span></h2>

        <p class="middle q-pa-lg">
          Creating uttermost value is at the core of everything we do at all of
          our offices. Much more than beating competitions, making profits or
          creating amazing products and services, we ensure that first, we are
          positively impacting the lives of those we engage directly or
          indirectly.
        </p>
      </div>
      <div class="rower  container">
        <div class="card">
          <div class="icon">
            <i class="fas fa-eye fa-3x"></i>
          </div>
          <h5>Vision</h5>
          <p>
            Raise a Generation that is Empowered Motivated and Stirred to
            Operate with Natural Excellence. (GEMSTONE)
          </p>
        </div>
        <div class="card">
          <div class="icon">
            <i class="fas fa-bullseye fa-3x"></i>
          </div>
          <h5>Mission</h5>
          <p>
            Help nation builders live a lifestyle of Leadership & Excellence for
            Accelerated Development (L.E.A.D) in their Personal & Professional
            Lives as we collectively build Nigeria into a most desirable Nation
            to live in.
          </p>
        </div>
        <div class="card">
          <div class="icon">
            <i class="fas fa-balance-scale fa-3x"></i>
          </div>
          <h5>Values</h5>
          <p>
            Health <br />
            Family <br />
            Leadership <br />
            Integrity <br />
            Legacy
          </p>
        </div>
      </div>
    </section>

    <setion class="campaings bg-dark">
      <Hey />
    </setion>

    <section class="fun-facts-section bg-primary sec-padding">
      <div class="container">
        <div class="row center">
          <div class="section-title text-center q-py-lg">
            <!-- <h2 class="text-center">
              My Perspectives
            </h2> -->
            <h2><span class="perp text-dark"> Perspectives </span></h2>
          </div>
        </div>
        <div class="row">
          <div class="fun-facts-img">
            <img class="q-my-md" alt="executive" src="/images/maigari7.jpg" />
          </div>
          <div class="fun-facts-items">
            <div class="row">
              <div class="fun-facts-item">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/y3B_chSsyM8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div class="fun-facts-item">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/E4GiUL3FS0M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div class="fun-facts-item">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5kwiXn6PRSc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div class="fun-facts-item">
                <img src="/images/5minutes.jpg" alt="" />
                <!-- <h3>
                  More
                  <a href="https://www.linkedin.com/in/chetnagrover/"
                    ><i
                      class="fa fa-linkedin-square"
                      aria-hidden="true"
                      style="color: yellow"
                    ></i
                  ></a>
                </h3>
                <p>Check more on Linkedin</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="reviews-section  sec-padding" id="reviews">
      <div class="container">
        <div class="row">
          <div class="section-title q-py-lg">
            <h2><span> Quotes </span></h2>
          </div>
        </div>
        <div class="rower">
          <div class="review-item">
            <img alt="executive" src="/images/maigari7.jpg" />
            <p>
              <i class="fa fa-quote-left" aria-hidden="true"></i>If you do not
              strive for excellence in your endeavours, you have lost your
              purpose.
              <i class="fa fa-quote-right" aria-hidden="true"></i>
            </p>
            <q>Dr. Manzo Maigari</q>
          </div>

          <div class="review-item">
            <img alt="executive" src="/images/maigari7.jpg" />
            <p>
              <i class="fa fa-quote-left" aria-hidden="true"></i> To be in
              charge of any situation, one must at all times remain calm.
              <i class="fa fa-quote-right" aria-hidden="true"></i>
            </p>
            <q>Dr. Manzo Maigari</q>
          </div>

          <div class="review-item">
            <img alt="executive" src="/images/maigari7.jpg" />
            <p>
              <i class="fa fa-quote-left" aria-hidden="true"></i>Never chase
              after money, it will elude you; rather seek after creating value,
              for money follows value.
              <i class="fa fa-quote-right" aria-hidden="true"></i>
            </p>
            <q>Dr. Manzo Maigari</q>
          </div>

          <!-- <div class="review-item">
            <img alt="executive" src="/images/maigari7.jpg" />
            <p>
              <i class="fa fa-quote-left" aria-hidden="true"></i> Chetna is an
              ingenious girl. She is amazing with graphic designing. Also, she
              knows when to be calm and when to be tough according to the
              situation which makes her different. Keep up your good work and
              stay positive like this.
              <i class="fa fa-quote-right" aria-hidden="true"></i>
            </p>
            <h3>sakshi sharma</h3>
            <span>student</span>
          </div> -->
        </div>
      </div>
    </section>

    <!-- <section class="q-mb-lg">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card flat square class="bg-white">
            <img alt="executive" src="/images/maigari8.jpg" />
          </q-card>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 q-px-lg q-py-md">
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
                voluptate odit ea ullam quas molestias, quibusdam nostrum maiores
                obcaecati repellat ipsum et rerum facilis consequuntur itaque sit
                doloribus. Corrupti similique obcaecati nihil, earum cumque sed cum
                placeat dolorum laboriosam reiciendis doloremque laudantium alias
                asperiores molestiae incidunt aliquam maiores at veniam. Quisquam animi
                sequi, modi alias, ipsum asperiores eos similique magni corrupti assumenda
                dolore quidem, in obcaecati officiis voluptatibus dolorum ad excepturi
                delectus natus hic. Perspiciatis labore eum impedit minima animi iste at
                excepturi facilis neque sapiente, vitae culpa facere ad exercitationem,
                deleniti placeat nisi reprehenderit odio cum! Nostrum veniam omnis quis
                repudiandae nesciunt quidem adipisci.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section> -->

    <section class="custom__bg-quote flex justify-center items-center q-px-xl">
      <span
        class="text-h4 q-pa-lg text-weight-light text-center text-white my-font-montserrat-light"
      >
        'If you do not strive for excellence in your endeavours, you have lost
        your purpose.'
      </span>

      <span class="text-primary text-weight-bold text-h5 span"
        >- Dr. Manzo Maigari</span
      >
    </section>

    <section class="gallery q-pa-md bg-dark">
      <div class="section-title q-py-lg">
        <h2><span> Gallery </span></h2>
      </div>
      <Gallery />
    </section>

    <!-- <section class="q-px-xl">
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
    </section> -->
    <!-- <section class="q-pt-xl">
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
    </section> -->

    <!--Footer Section-->
    <section>
      <div class="q-pa-xl bg-grey-10 text-white my-font-poppins-regular">
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
              Contact Me
            </div>
          </div>

          <div class="col-md-2 col-sm-12 col-xs-12 q-pt-md my-font-nav">
            <div class="text-body1 my-font-montserrat-light">Resources</div>
            <q-separator class="bg-grey-9" style="width: 50%" />
            <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/about')"
            >
              FAQ
            </div>
            <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/fellowship')"
            >
              Send a Message
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
                <span class="q-ml-sm my-font-montserrat-light"
                  >Facebook</span
                ></a
              >
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
                <span class="q-ml-sm my-font-montserrat-light">Twitter</span></a
              >
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
                <span class="q-ml-sm my-font-montserrat-light"
                  >Instagram</span
                ></a
              >
            </div>
            <div class="text-body2 q-mt-md cursor-pointer">
              <a
                class=" my-font-montserrat-light text-white text-center"
                href="http://facebook.com"
                target="_blank"
              >
                <q-icon
                  class="link"
                  color="grey-8"
                  name="ion-logo-linkedin"
                  style="font-size: 2em"
                />
                <span class="q-ml-sm my-font-montserrat-light"
                  >Linkedin</span
                ></a
              >
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
import Hey from "../components/Hey.vue";
// import Gallery from "../components/Gallery.vue";
import Gallery from "../components/Gallery.vue";
// import Contact from "./Contact.vue";

export default {
  name: "PageIndex",
  components: {
    Hey,
    Gallery
  },
  data: () => ({
    slide: 1
  })
};
</script>

<style lang="scss">
.text-r {
  text-align: right;
}
.campaings {
  background: grey !important;
}
.about {
  background: #1d1d1d;
}
.section {
  margin: 6rem 0 !important;
}
.dr {
  width: 100%;
  object-fit: contain;
}
.aboutt {
  font-size: 16px;
  font-weight: 400;

  margin: 0rem 0 2rem !important ;
}

.hello .section-title h2 {
  color: #1d1d1d !important;
  text-align: left;
}

.q-card__section--vert {
  padding: 5px;
}
.gallery {
  margin: 0 !important;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
}
.q-card {
  //  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
  box-shadow: none !important;
  background: none !important;
}
img {
  object-fit: contain;
  width: 100%;
}
// .icon {
//   text-align: center;
// }
.container {
  width: 90%;
  margin: 0 auto;
  max-width: 1440px;
}

.align {
  align-items: center !important;
}

.middle {
  max-width: 700px;
  margin: 0 auto;
  font-size: 16px;
}
.span {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.row,
.column,
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.rower {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  place-items: center;
}

@media (max-width: 700px) {
  .rower {
    flex-wrap: wrap;
  }
}

.section-title h2 {
  text-align: center;
  text-transform: capitalize;
  font-size: 35px;
  color: #fff !important;
  font-weight: 600;
  line-height: 0.5rem;
}

.section-title h2 span {
  position: relative;
}
.section-title h2 span::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  color: #ffff;
  background-color: #ffdb58;
  transform: skewY(-3deg);
}

.section-title h2 .perp::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  color: #333;
  background-color: #333;
  transform: skewY(-3deg);
}

.card {
  box-shadow: 2px 10px 10px rgba(197, 190, 190, 0.97);
  width: 100% !important;
  // width: calc((100% / 3) - 30px);
  margin: 0 15px 30px;
  padding: 30px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  min-height: 300px;
  text-align: center;
  z-index: 1;
  // box-shadow: #f2c037;
  background-color: #1d1d1d;
}

.card h5 {
  font-size: 26px;
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #1d1d1d;
  z-index: -1;
  color: #fff;
  transition: all 0.5s ease;
}
.card::before {
  transform: scale(1, 0);
}
.card:hover::after {
  transform: scale(0, 1);
}
.card:hover i {
  color: #1d1d1d !important;
}
.card:hover p {
  color: #1d1d1d !important;
}
.card:hover h5 {
  color: #1d1d1d !important;
}
.card:nth-child(1) {
  background-color: #ffdb58;
}
.card:nth-child(2) {
  background-color: #ffdb58;
}
.card:nth-child(3) {
  background-color: #ffdb58;
}

.card h5 {
  color: #ffdb58;
  font-size: 26px;
  font-weight: 500;
  text-transform: capitalize;
  margin: 10px 0 10px;
}
.card p {
  font-size: 16px;
  color: #fff !important;
}
.card i {
  color: #fff !important;
}

.fun-facts-section {
  background-color: #333;
  // margin-top: 2rem;
}
.fun-facts-img,
.fun-facts-items {
  width: 50%;
}

@media (max-width: 800px) {
  .fun-facts-img,
  .fun-facts-items {
    width: 100%;
  }
}
@media (max-width: 500px) {
  .dr {
    margin: 1rem 0;
  }
  .text-caption {
    text-align: center !important;
  }

  .fun-facts-item {
    background-color: #ffdb58;
    width: 100% !important;
    margin: 0 15px 30px;
    min-height: 200px;
    text-align: center;
    border-radius: 4px;
  }

  .text-h4 {
    font-size: 1.125rem !important;
  }

  .custom__btn-pink {
    text-decoration: none;
    padding: 5px 30px !important;
    border: 2px solid #ffdb58;
  }

  .q-px-xl {
    padding-left: 0px !important;
    padding-right: 48px;
  }

  .q-carousel__arrow .q-icon {
    display: none !important;
  }
  .q-px-lg {
    padding: 0 !important;
  }
  .card {
    text-align: center;
  }

  .text-h5 {
    font-size: 1rem !important;
  }

  .q-px-xl {
    padding-right: 8px;
  }
  .q-pt-md {
    // padding-top: 16px;
    padding: 1rem !important;
  }
  .q-pr-xl {
    padding-right: 0px !important;
  }
  .footer-row {
    text-align: center;
  }
  .q-card__section--vert {
    padding: 0 16px !important;
  }

  .q-pa-md {
    padding: 0px 16px;
  }
}

.fun-facts-img {
  display: flex;
  justify-content: center;
  animation: zoom 5s linear infinite;
}

.fun-facts-img img {
  // max-width: 420px;
  width: 100%;
  align-items: center;
  padding: 0 15px;

  object-fit: contain;
}
.fun-facts-item {
  background-color: #ffdb58;
  width: calc((100% / 2) - 30px);
  margin: 0 15px 30px;
  min-height: 100%;
  text-align: center;
  border-radius: 4px;
}

.fun-facts-item h3 {
  font-size: 35px;
  color: #fff;
  text-transform: capitalize;
  margin: 0 0 5px;
}
.fun-facts-item p {
  text-transform: uppercase;
  color: #ffdb58;
  // color: #26a69a;
}

.fun-facts-item:nth-child(1) {
  background-color: #1d1d1d;
}
.fun-facts-item:nth-child(2) {
  background-color: #1d1d1d;
}
.fun-facts-item:nth-child(3) {
  background-color: #1d1d1d;
}
.fun-facts-item:nth-child(4) {
  background-color: #1d1d1d;
}

@keyframes zoom {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
}

.reviews-section {
  background-color: #333;
  // background-color: #24292d;
  padding-bottom: 50px;
}
.reviews-section h2 {
  color: #fff !important;
}

.review-item {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  background: #1d1d1d;
  min-height: 250px;
  text-align: center;
  border-radius: 8px;
  // margin-bottom: 40px;
}

.review-item img {
  max-width: 100px;
  border: 5px solid #2f363e;
  border-radius: 50%;
  margin-bottom: 10px;
  // margin-bottom: 15px;
  transition: all 0.5s ease;
}
.review-item:hover img {
  transform: translateX(30px) rotate(30deg);
  box-shadow: #2f363e;
}

.review-item p {
  font-size: 20px;
  color: #fff;
  font-size: 16px;
}
.review-item p i {
  color: #ffdb58;
}
.review-item q {
  color: #ffdb58;
}

.review-item h3 {
  font-size: 16px;
  color: #26a69a;
  font-weight: 500;
  margin: 0 0 5px;
  text-transform: capitalize;
}

.review-item span {
  display: block;
  font-size: 16px;
  color: #fff;
  text-transform: capitalize;
}
.custom__btn-pink {
  margin: 1rem 0;
  text-decoration: none;
  padding: 15px 50px;
  border: 2px solid #ffdb58;
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

.link:hover {
  color: #e96e13 !important;
  transition: all 0.55s ease-in-out;
}

.about__img {
  display: flex;
  column-gap: 1rem;
  align-self: center;
  justify-content: center;
}
.about__img-overlay {
  overflow: hidden;
}

.about__img-one {
  width: 180px;
}

.about__img-two {
  width: 130px;
}

.about__img-one,
.about__img-two {
  transition: 0.3s;
}
.about__img-one:hover,
.about__img-two:hover {
  transform: scale(1.1);
}

.experience__container {
  row-gap: 2.5rem;
  justify-content: center;
  justify-items: center;
}

.experience__content {
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  justify-items: center;
  padding: 0 2rem;
}

.experience__number {
  font-size: 1.5rem;
  font-weight: var(--font-semi-bold);
  margin-bottom: var(--mb-0-5);
}
.experience__description {
  font-size: var(--small-font-size);
}

.experience__img {
  position: relative;
  padding-bottom: 2rem;
  /* height: 500px; */
  /* background: url(/pe/Ellipse\ 12.png) center center/cover; */
}
.experience__img .over {
  position: relative;
  margin-left: 4rem;
}
.experience__img .over img {
  object-fit: contain;
}
.experience__img .over .rel {
  position: relative;
  // margin: 0 2rem;
  transition: all 0.5s ease-in-out;

  /* height: 500px; */
}
.experience__img .over .rel:hover {
  z-index: 5;

  /* height: 500px; */
}

.experience__overlay {
  overflow: hidden;
}
.experience__overlay:nth-child(1) {
  width: 100%;
  /* width: 263px; */
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 500px; */
  /* height: 300px; */
}
.experience__overlay:nth-child(2) {
  // width: 200px;
  width: 50%;
  position: absolute;
  /* bottom: 0; */
  // height: 20px;
  height: 40%;
  top: 0rem !important;
  left: -70px !important;
  /* top: 2rem; */
  /* right: 20px; */
}
.experience__overlay:nth-child(3) {
  // width: 220px;
  width: 50%;
  position: absolute;
  /* top: 12rem; */
  bottom: -20% !important;
  right: -70px;
  // height: 170px;
  height: 40%;
  // left: -70px !important;
  /* top: 2rem; */
  /* right: 20px; */
}

.experience__img-one,
.experience__img-two {
  transition: 0.3s;
}

/* .experience__img-one {
  position: absolute;
  z-index: 2;
  height: 200px;
  top: 0;
  left: 0;
}

.experience__img-two {
  position: absolute;
  z-index: 3;
  height: 200px;
  top: 0;
  left: 0;
} */
.experience__img-one:hover,
.experience__img-two:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 500px) {
  .experience__overlay:nth-child(2) {
    // width: 200px;
    width: 50%;
    position: absolute;
    /* bottom: 0; */
    // height: 20px;
    height: 40%;
    top: 0rem !important;
    left: -70px !important;
    /* top: 2rem; */
    /* right: 20px; */
  }
  .experience__overlay:nth-child(3) {
    // width: 220px;
    width: 50%;
    position: absolute;
    /* top: 12rem; */
    bottom: -20% !important;
    right: 0px;
    // height: 170px;
    height: 40%;
    // left: -70px !important;
    /* top: 2rem; */
    /* right: 20px; */
  }
}

@media (max-width: 420px) {
  .experience__overlay:nth-child(2) {
    // width: 200px;
    width: 50%;
    position: absolute;
    /* bottom: 0; */
    // height: 20px;
    height: 40%;
    top: 0rem !important;
    left: -70px !important;
    /* top: 2rem; */
    /* right: 20px; */
  }
  .experience__overlay:nth-child(3) {
    // width: 220px;
    width: 50%;
    position: absolute;
    /* top: 12rem; */
    bottom: -20% !important;
    // right: -70px;
    // height: 170px;
    height: 40%;
    // left: -70px !important;
    /* top: 2rem; */
    /* right: 20px; */
  }
}
@media (max-width: 350px) {
  .experience__overlay:nth-child(2) {
    // width: 200px;
    width: 50%;
    position: absolute;
    /* bottom: 0; */
    // height: 20px;
    height: 40%;
    top: 0rem !important;
    left: -70px !important;
    /* top: 2rem; */
    /* right: 20px; */
  }
  .experience__overlay:nth-child(3) {
    // width: 220px;
    width: 50%;
    position: absolute;
    /* top: 12rem; */
    bottom: -20% !important;
    right: 0px;
    // height: 170px;
    height: 40%;
    // left: -70px !important;
    /* top: 2rem; */
    /* right: 20px; */
  }
}
</style>
