<template>
  <div class="links">
    <ul>
      <li @click="goHome">Home</li>
      <li @click="goAbout">about Us</li>
      <li>contact Us</li>
    </ul>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const goHome = () => {
      router.push({ name: 'home' })
      console.log('click ')
    }
    const goAbout = () => {
      router.push({ name: 'about-us' })
    }
    return {
      goAbout,
      router,
      goHome
    }
  }
}
</script>
