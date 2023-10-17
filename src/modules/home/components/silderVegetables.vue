<template>
  <div class="q-pa-md">
    <div class="slider">
      <div class="container">
      <q-carousel
      ransition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        v-model="slide"
        :autoplay="autoplay"
        ref="carousel"
        infinite

      >
        <q-carousel-slide :name="silde.id" v-for="silde in silder" :key="silde.id">

          <div class="silder-content">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="silder-image">
                  <img :src="silde.image" />

                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="silder-text">
                  <div class="title-silder">
                    <h4>{{silde.title}}</h4>
                    <span>{{silde.title2}}</span>
                    </div>
                  <div class="text-silder"><p>{{silde.text}}</p></div>
                </div>
                <div class="read-more">
                  <q-btn unelevated color="warning" label="Buy Now" />
                  <q-btn class='hover'  color="dark" label="Read More" />

                </div>
              </div>
            </div>
          </div>
          </q-carousel-slide>

        <template v-slot:control>

          <q-carousel-control
            position="bottom-left"
            class="q-gutter-xs"
          >
            <q-btn
              push round dense color="orange" text-color="white" icon="keyboard_backspace"
              @click="$refs.carousel.previous()"
            />
            <q-btn
              push round dense color="orange" text-color="white" icon="east"
              @click="$refs.carousel.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
  setup () {
    const silder = ref([])
    // get data silder
    const getDataSilder = () => {
      axios.get('http://localhost:4000/silder').then((res) => {
        silder.value = res.data
        console.log('ssssssssss', silder.value)
      })
    }
    onMounted(() => {
      getDataSilder()
    })
    return {
      silder,
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>
