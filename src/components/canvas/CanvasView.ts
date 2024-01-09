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
      qudits,
      setSelectedQudit,
      selectedQudit,
      insertQudit,
      couplings,
      setSelectedCoupling,
      selectedCoupling,
      insertCoupling,
      insertConstant,
      designModelStep,
      setDesignModelStep
    } = useDashboardStore()

    return {
      qudits,
      setSelectedQudit,
      selectedQudit,
      insertQudit,
      couplings,
      setSelectedCoupling,
      selectedCoupling,
      insertCoupling,
      insertConstant,
      designModelStep,
      setDesignModelStep
    }
  }
})
