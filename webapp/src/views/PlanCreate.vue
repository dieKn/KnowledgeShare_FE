<template>
  <div class="login">
    <PlanCreate></PlanCreate>
  </div>
</template>
<script>
// @ is an alias to /src
import PlanCreate from '@/components/PlanCreate.vue'

export default {
  name: 'login',
  components: {
    PlanCreate
  }
}
</script>

