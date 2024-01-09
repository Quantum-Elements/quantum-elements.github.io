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
      appView,
      setAppView
    } = useDashboardStore()

    return {
      appView,
      setAppView

    }
  }
})
