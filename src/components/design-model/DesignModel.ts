import { defineComponent } from 'vue'
// import EllipsisLoader from '@/components/loaders/EllipsisLoader.vue'
import { useDashboardStore } from '@/composables'
import CanvasView from '@/components/canvas/CanvasView.vue'

export default defineComponent({
  // name: 'SuiteGPTView',
  components: {
    // EllipsisLoader
    CanvasView
  },
  // eslint-disable-next-line
  setup() {

    const {
      setSelectedQudit,
      selectedQudit,
      insertQudit,
      setSelectedCoupling,
      selectedCoupling,
      insertCoupling,
      insertConstant,
      designModelStep,
      setDesignModelStep
    } = useDashboardStore()

    return {
      setSelectedQudit,
      selectedQudit,
      insertQudit,
      setSelectedCoupling,
      selectedCoupling,
      insertCoupling,
      insertConstant,
      designModelStep,
      setDesignModelStep
    }
  }
})
