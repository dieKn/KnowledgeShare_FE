<template>
  <div class="about">
    <h1>This is an test page</h1>
    <Test msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
// @ is an alias to /src
import Test from '@/components/Test.vue'

export default {
  name: 'home',
  components: {
    Test
  }
}
</script>
