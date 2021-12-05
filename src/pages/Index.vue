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
            <a
              href="#"
              class="custom__btn-pink text-primary text-uppercase my-font-montserrat-regular q-mt-md"
              >Get To Know Me</a
            >
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
            <a
              href="#"
              class="custom__btn-pink text-primary text-uppercase my-font-montserrat-regular q-mt-md"
              >Get To Know Me</a
            >
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
            <span class="text-white text-body1 my-font-montserrat-light"
              >Making African lives worth living through job creation,</span
            >
            <span class="text-white text-body1 my-font-montserrat-light"
              >empowerment, mentoring and skill development.</span
            >
            <a
              href="#"
              class="custom__btn-pink text-primary text-uppercase my-font-montserrat-regular q-mt-md"
              >Get To Know Me</a
            >
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
            <!-- <span
              class="text-white text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
            >
              Values. Impact.
            </span> -->

            <span class="text-white text-body1 my-font-montserrat-light"
              >Making African lives worth living through job creation,</span
            >
            <span class="text-white text-body1 my-font-montserrat-light"
              >empowerment, mentoring and skill development.</span
            >
            <a
              href="#"
              class="custom__btn-pink text-yellow-14 text-uppercase my-font-montserrat-regular q-mt-md"
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
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card square>
            <q-card-section class="q-pa-md">
              <div
                class="text-dark text-h4 my-font-montserrat-bold text-uppercase q-pa-0"
              >
                About
              </div>
              <!-- <div class="text-subtitle2 my-font-montserrat-extraBold">
                Manzo maigari is a man of purpose and passion that...
              </div> -->
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
                nesciunt quidem adipisci.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 q-px-lg q-py-md">
          <q-card flat square class="bg-white">
            <img alt="executive" src="/images/maigari4.jpg" class="dr" />
          </q-card>
        </div>
      </div>
    </section>

    <section class="dr-cards">
      <div class="rower container">
        <div class="card">
          <div class="icon">
            <i class="fas fa-eye fa-3x"></i>
          </div>
          <h5>Manzo different cards</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            blanditiis cupiditate temporibus sapiente voluptate pariatur
            provident, nulla tempora culpa fugit!
          </p>
        </div>
        <div class="card">
          <div class="icon">
            <i class="fas fa-bullseye fa-3x"></i>
          </div>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            vitae dolorem molestias dolorum vel facilis delectus molestiae
            aperiam harum reprehenderit.
          </p>
        </div>
        <div class="card">
          <div class="icon">
            <i class="fas fa-balance-scale fa-3x"></i>
          </div>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur perferendis impedit atque, soluta labore doloremque
            voluptate. Aliquam, deserunt. Cum, quas?
          </p>
        </div>
      </div>
    </section>

    <setion class="campaings">
      <Hey />
    </setion>

    <section class="fun-facts-section sec-padding">
      <div class="container">
        <div class="row center">
          <div class="section-title text-center">
            <!-- <h2 class="text-center">
              My Perspectives
            </h2> -->
            <h2><span> Perspectives </span></h2>
          </div>
        </div>
        <div class="row">
          <div class="fun-facts-img">
            <img alt="executive" src="/images/maigari7.jpg" />
          </div>
          <div class="fun-facts-items">
            <div class="row">
              <div class="fun-facts-item">
                <h3>4+</h3>
                <p>Organizations like IIM Bangalore and more</p>
              </div>

              <div class="fun-facts-item">
                <h3>2+</h3>
                <p>Non-Profit-Organizations</p>
              </div>

              <div class="fun-facts-item">
                <h3>1+</h3>
                <p>Script foundation and Script winter of code</p>
              </div>

              <div class="fun-facts-item">
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
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/NJs_Gd80EBQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="reviews-section  sec-padding" id="reviews">
      <div class="container">
        <div class="row">
          <div class="section-title">
            <h2><span> Quotes </span></h2>
          </div>
        </div>
        <div class="rower">
          <div class="review-item">
            <img alt="executive" src="/images/maigari7.jpg" />
            <p>
              <i class="fa fa-quote-left" aria-hidden="true"></i> Chetna is very
              proficient in her design skills and innovative thinking
              capabilities makes her ever better from others. Keep working on
              things untill they gets perfect and her team working abilities are
              also key points.
              <i class="fa fa-quote-right" aria-hidden="true"></i>
            </p>
            <q>Dr. Manzo Maigari</q>
          </div>

          <div class="review-item">
            <img alt="executive" src="/images/maigari7.jpg" />
            <p>
              <i class="fa fa-quote-left" aria-hidden="true"></i> Chetna is very
              passionate about her Graphic designing skills. She is very
              innovative and creative person. She is a calm minded person who
              takes her responsibilities seriously and completes them before
              time.<i class="fa fa-quote-right" aria-hidden="true"></i>
            </p>
            <q>Dr. Manzo Maigari</q>
          </div>

          <div class="review-item">
            <img alt="executive" src="/images/maigari7.jpg" />
            <p>
              <i class="fa fa-quote-left" aria-hidden="true"></i>Chetna is
              really hardworking and will never compromise on her work. Her
              creativity and fun nature makes it awesome to work with her. She
              really motivates others around her to work harder. Her positive
              and fun nature will definitely help her in her future endeavors.
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
      <span class="text-h5 text-center text-white my-font-montserrat-light">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempore.
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum, explicabo." -
        <span class="text-primary">Dr. Manzo Maigari</span></span
      >
    </section>

    <section class="gallery q-pa-xl bg-dark">
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
.q-card {
  //  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
  box-shadow: none !important;
}
img {
  object-fit: contain;
  width: 100%;
}
// .icon {
//   text-align: center;
// }
.container {
  width: 95%;
  margin: 0 auto;
  max-width: 1440px;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  height: 2px;
  color: #ffff;
  background-color: #ffdb58;
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
  min-height: 200px;
  z-index: 1;
  // box-shadow: #f2c037;
  background-color: #1d1d1d;
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
  font-size: 16px;
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
  margin-top: 2rem;
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
    padding: 30px;
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
  padding: 30px;
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
  height: 350px;
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
  min-height: 200px;
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
</style>
