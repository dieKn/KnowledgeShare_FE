<template>
  <div class="my-page">
    <MyPage></MyPage>
  </div>
</template>
<script>
// @ is an alias to /src
import MyPage from '@/components/MyPage.vue'

export default {
  name: 'my-page',
  components: {
    MyPage
  }
}
</script>

