<template>
  <Dashboard />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dashboard from '@/components/dashboard/DashboardView.vue'

export default defineComponent({
  name: 'App',
  components: {
    Dashboard
  }
})
</script>

<style lang="scss">
@import "./App.scss";
</style>
