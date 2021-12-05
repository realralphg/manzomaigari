<template>
  <div class="container-g">
    <a href="" data-lightbox="homePortfolio">
      <img src="/images/alvavet1.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio" class="vertical">
      <img src="/images/alvavet2.jpg" />
    </a>

    <a href="" class="horizontal">
      <img src="/images/alvavet 5.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio">
      <img src="/images/alvavet4.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio">
      <img src="/images/hungarose1.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio" class="big">
      <img src="/images/babo1.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio">
      <img src="/images/babo3.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio" class="vertical">
      <img src="/images/hungarose2.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio">
      <img src="/images/babo2.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio" class="horizontal">
      <img src="/images/hungarose3.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio">
      <img src="/images/agrofeed1.jpg" />
    </a>

    <!-- <a href="" data-lightbox="homePortfolio" class="big">
      <img src="/images/boss1.jpg" />
    </a> -->

    <a href="" data-lightbox="homePortfolio">
      <img src="/images/agrofeed2.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio" class="horizontal">
      <img src="/images/alvavet 6.jpg" />
    </a>

    <a href="" data-lightbox="homePortfolio" class="center">
      <img src="/images/alvavet.jpg" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-g > a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
}

.container-g > a > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 2px 16px var(--shadow);
}

.container-g {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-auto-rows: 120px;
  grid-auto-flow: dense;
}

.horizontal {
  grid-column: span 2;
}

.vertical {
  grid-row: span 2;
  /* grid-row: span 3; */
}
.center {
  grid-column: span 3;
  /* grid-row: span 3; */
}

.big {
  grid-column: span 2;
  grid-row: span 2;
}
</style>
