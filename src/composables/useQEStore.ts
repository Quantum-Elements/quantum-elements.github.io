import { onMounted, computed } from 'vue'
import { StateInterface } from '@/store'
import { useStore } from 'vuex'
export const useQEStore = () => {
  const store = useStore<StateInterface>()

  onMounted(() => {
    // Write anything we need to check when the suigptstore is imported somewhere
    // console.log('netSuite/GET_USER_LICENSE')
    // store.dispatch('netSuite/GET_USER_LICENSE')
  })

  return {
    // State
    // isConversationVisible: computed(() => store.state.suiteGPT.isConversationVisible),
    // isUserLicenseLoading: computed(() => store.state.netSuite.isUserLicenseLoading),

    // Getters Usually call if needed to fetch data automatically
    // getUserLicense: () => store.dispatch('netSuite/GET_USER_LICENSE')
    // Actions

    // Mutations

  }
}
