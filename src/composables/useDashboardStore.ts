import { onMounted, computed } from 'vue'
import { StateInterface } from '@/store'
import { useStore } from 'vuex'
import { EViewOptions, EDashboardTabOptions, IQudit, ICoupling } from '@/store/dashboard-module/state'
export const useDashboardStore = () => {
  const store = useStore<StateInterface>()

  onMounted(() => {
    // Write anything we need to check when the suigptstore is imported somewhere
  })

  return {
    // State
    appView: computed(() => store.state.dashboard.appView),
    dashboardTab: computed(() => store.state.dashboard.dashboardTab),
    designModelStep: computed(() => store.state.dashboard.designModelStep),
    simulateModelStep: computed(() => store.state.dashboard.simulateModelStep),
    qudits: computed(() => store.state.dashboard.qudits),
    selectedQudit: computed(() => store.state.dashboard.selectedQudit),
    couplings: computed(() => store.state.dashboard.couplings),
    selectedCoupling: computed(() => store.state.dashboard.selectedCoupling),

    // Getters Usually call if needed to fetch data automatically

    // Actions
    // displayNotesSummaryConversation: () => store.dispatch('suiteGPT/DISPLAY_NOTES_SUMMARY_CONVERSATION'),
    // askQuestionToSuiteGPT: (query: string) => store.dispatch('suiteGPT/ASK_QUESTION_TO_SUITEGPT', query),
    // getSystemNotesSummary: () => store.dispatch('suiteGPT/GET_SYSTEM_NOTES_SUMMARY'),
    // getUserNotesSummary: () => store.dispatch('suiteGPT/GET_USER_NOTES_SUMMARY'),

    // Mutations
    setAppView: (payload: EViewOptions) => store.commit('dashboard/SET_APP_VIEW', payload),
    setDashboardTab: (payload: EDashboardTabOptions) => store.commit('dashboard/SET_DASHBOARD_TAB', payload),
    setDesignModelStep: (payload: number) => store.commit('dashboard/SET_DESIGN_MODEL_STEP', payload),
    setSimulateModelStep: (payload: number) => store.commit('dashboard/SET_SIMULATE_MODEL_STEP', payload),
    insertQudit: () => store.commit('dashboard/INSERT_QUDIT'),
    insertCoupling: () => store.commit('dashboard/INSERT_COUPLING'),
    setSelectedQudit: (payload: IQudit) => store.commit('dashboard/SET_SELECTED_QUDIT', payload),
    setSelectedCoupling: (payload: ICoupling) => store.commit('dashboard/SET_SELECTED_COUPLING', payload),
    insertConstant: () => store.commit('dashboard/INSERT_CONSTANT_IN_COUPLING')
  }
}
