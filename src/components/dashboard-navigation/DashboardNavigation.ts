import { defineComponent } from 'vue'
// import EllipsisLoader from '@/components/loaders/EllipsisLoader.vue'
import { useDashboardStore } from '@/composables'

export default defineComponent({
  // name: 'SuiteGPTView',
  components: {
    // EllipsisLoader
  },
  // eslint-disable-next-line
  setup() {

    const {
      dashboardTab,
      setDashboardTab
    } = useDashboardStore()

    return {
      dashboardTab,
      setDashboardTab
    }
  }
})
