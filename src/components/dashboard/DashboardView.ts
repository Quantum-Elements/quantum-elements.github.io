import { defineComponent, ref } from 'vue'
// import EllipsisLoader from '@/components/loaders/EllipsisLoader.vue'
import { useDashboardStore } from '@/composables'
import DesignModel from '@/components/design-model/DesignModel.vue'
import SimulateModel from '@/components/simulate-model/SimulateModel.vue'
import WelcomeView from '@/components/welcome/WelcomeView.vue'
import DashboardNavigation from '@/components/dashboard-navigation/DashboardNavigation.vue'

export default defineComponent({
  // name: 'SuiteGPTView',
  components: {
    // EllipsisLoader
    WelcomeView,
    DashboardNavigation,
    DesignModel,
    SimulateModel
  },
  // eslint-disable-next-line
  setup() {

    const {
      appView,
      setAppView,
      dashboardTab
    } = useDashboardStore()

    return {
      appView,
      setAppView,
      dashboardTab
    }
  }
})
