<template>
  <div class="image-grid">
    <div class="image-row">
      <div class="image image-01"></div>
      <div class="image image-02"></div>
      <div class="image image-03"></div>
    </div>
    <div class="image-row">
      <div class="image image-04"></div>
      <div class="image image-05"></div>
    </div>
    <div class="image-row">
      <div class="image image-06"></div>
      <div class="image image-07"></div>
      <div class="image image-08"></div>
      <div class="image image-09"></div>
    </div>
    <!-- <div class="image-row">
      <div class="image image-10"></div>
      <div class="image image-11"></div>
      <div class="image image-12"></div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.image-grid {
  padding: 12px;
}

.image-row {
  display: flex;
}

.image-row .image {
  margin: 12px;
  height: 240px;
}

.image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.15),
    0 6px 20px rgba(0, 0, 0, 0.7);
}

.image-01 {
  background-image: url("/images/maigari7.jpg");
  flex: 1;
}

.image-02 {
  background-image: url("/images/maigari7.jpg");
  flex: 1;
}

.image-03 {
  background-image: url("/images/maigari7.jpg");
  flex: 2;
}

.image-04 {
  background-image: url("/images/maigari7.jpg");
  flex: 1;
}

.image-05 {
  background-image: url("/images/maigari7.jpg");
  flex: 2;
}

.image-06 {
  background-image: url("/images/maigari7.jpg");
  flex: 2;
}

.image-07 {
  background-image: url("/images/maigari7.jpg");
  flex: 1;
}

.image-08 {
  background-image: url("/images/maigari7.jpg");
  flex: 3;
}

.image-09 {
  background-image: url("/images/maigari7.jpg");
  flex: 1;
}

/* .image-10 {
  background-image: url("/images/maigari7.jpg");
  flex: 1;
}

.image-11 {
  background-image: url("/images/maigari7.jpg");
  flex: 1;
}

.image-12 {
  background-image: url("/images/maigari7.jpg");
  flex: 1;
} */

@media screen and (max-width: 400px) {
  .image-row {
    flex-direction: column;
  }

  .image-row .image {
    flex-basis: auto;
  }
}
</style>
