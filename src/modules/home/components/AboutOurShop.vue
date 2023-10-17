<template>
  <!--start section about our shop  -->
  <div class="About-Shop text-center">
    <div class="about-bg">
      <div class="container">
      <img src="../../../assets//images/about-bg.png" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <div class="icon">
          <img src="../../../assets/images/img-2.png">
        </div>
      </div>
      <div class="col-md-12">
        <div class="title">
          <h3>About Our Shop</h3>
        </div>
      </div>
      <div class="col-md-12">
        <div class="image">
          <img src="../../../assets/images/img-3.png">
        </div>
      </div>
      <div class="col-md-12">
        <p class="text-about">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
        </p>
      </div>
      <div class="col-md-12">
        <div class="read-more">
          <q-btn class="De-button" unelevated color="dark" label="read More" />

        </div>

      </div>
    </div>
    <!--start product -->
    <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12 text-center">
            <div class="Our-Vegetables">
              <div class="container">
                <div class="bg-image-Vegetables">
                  <img src="../../../assets/images/img-2.png">
                </div>

                <h2>Our Vegetables</h2>
                <p>Reader will be distracted by the readable content of a</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 parent-card" v-for="prod in product" :key="prod.id">
            <div class="card">
                <img src="../../../assets/images/img-4.png" />
                <h2 class="price dolor_text"><span>$</span><span style="color:#ecad15">{{prod.price}}</span></h2>
                <h2 class="producat-title dolor_text">{{prod.title}}</h2>
                <h2 class="weight dolor_text">{{prod.weight}}</h2>
                <p class="bio">{{ prod.description }}</p>
                <q-btn class="De-button" label="buy Now" color="dark" />
            </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12 text-center">
          <q-btn class="De-button" label="buy Now" color="dark" />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
export default {
  setup () {
    const product = ref([])
    const onProduct = () => {
      axios.get('http://localhost:4000/product').then((res) => {
        console.log(res)
        console.log('good')
        product.value = res.data
        console.log(product.value)
      })
    }
    onMounted(() => {
      onProduct()
    })
    return {
      product
    }
  }
}
</script>
