<template>
  <div class="parent-silader">
      <slider />

  </div>
  <div class="about-our-shop">
    <AboutOurShop />
  </div>
  <div class="Why-Choose-Us">
    <WhyChooseUs />
  </div>
  <div class="testimoniAl">
    <TestimoniAl />
  </div>
</template>

<script>
import slider from '../components/silderVegetables.vue'
import AboutOurShop from '../components/AboutOurShop.vue'
import WhyChooseUs from '../components/WhyChooseUs.vue'
import TestimoniAl from '../components/TestimoniAl.vue'
export default {
  setup () {
    return {

    }
  },
  components: {
    slider,
    AboutOurShop,
    WhyChooseUs,
    TestimoniAl
  }
}
</script>
