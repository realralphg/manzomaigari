<template>
  <q-page class="con">
    <figure class="intro">
      <img src="images/maigari8.jpg" alt="" />
      <figcaption class="caption">
        <!-- <h1>Invasion</h1> -->
        <!-- <blockquote>
          The man who comes back through the door in the wall will never be
          quite the same as the man who went out.
        </blockquote>
        <cite>Aldous Huxley</cite> -->
      </figcaption>
      <span class="overlay">
        <svg
          version="1.1"
          id="circle"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 500 250"
          enable-background="new 0 0 500 250"
          xml:space="preserve"
          PreserveAspectRatio="none"
        >
          <path
            fill="#333"
            d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
          />
        </svg>
      </span>
    </figure>
    <!-- <article class="copy">
      <p class="teaser">
        Scroll down to see the effect. Actually I just wanted to code a layout
        idea with a curved cut header image, but ended up with this one. Even
        though it looks fine and performance quite good, I dislike the idea of
        having an inline svg in the markup, that only has an asthetic/design
        function. Any ideas on how to improve this pen are welcome.
      </p>
      <p>
        If you browsing with Chrome, make sure you have the "experimental Web
        Platform features" enabled (go to chrome://flags/), to see image's
        mix-blend-mode effect.
      </p>
    </article> -->
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="scss">
// @import url(https://fonts.googleapis.com/css?family=Roboto:100, 300);

$blue: #8dd9ff;
$yellow: #ffda00;

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
}

.intro {
  position: relative;
  height: auto;
  transform: translateZ(0);
  background-image: linear-gradient(35deg, $blue, $yellow);

  img {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    z-index: 1;
    // mix-blend-mode: multiply;
  }
}

.intro .caption {
  position: absolute;
  bottom: 25%;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 3;
  color: white;

  h1 {
    display: inline-block;
    width: 70%;
    font-size: 6vw;
    font-weight: 100;
  }
}

.intro .overlay {
  position: absolute;
  bottom: -90px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // height: 100%;
  }
}

.copy {
  width: 100%;
  max-width: 60rem;
  height: 200%;
  margin: 0 auto;
  padding: 10vw 5vw 0 5vw;
  color: mix(black, $blue, 50%);
  font-weight: 300;

  //   p {
  //     margin-bottom: 1.5rem;
  //   }
}

.copy .teaser {
  font-size: 1.6rem;
  text-align: center;
}
</style>
