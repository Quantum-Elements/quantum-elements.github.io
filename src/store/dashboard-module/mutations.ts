import { MutationTree } from 'vuex'
import { EViewOptions, IDashboardState, EDashboardTabOptions, IQudit, ICoupling, EDesignModelStep, ESimulateModelStep } from './state'

const mutation: MutationTree<IDashboardState> = {
  // These mutations are the ones that change the state
  // someMutation (/* state: ExampleStateInterface */) {
  // a line to prevent linter errors
  // }
  SET_APP_VIEW (state: IDashboardState, payload: EViewOptions) {
    state.lastAppView = state.appView
    state.appView = payload
  },
  SET_DASHBOARD_TAB (state: IDashboardState, payload: EDashboardTabOptions) {
    state.dashboardTab = payload
  },
  SET_DESIGN_MODEL_STEP (state: IDashboardState, payload: EDesignModelStep) {
    state.designModelStep = payload
    state.selectedCoupling = null
    state.selectedQudit = null
  },
  SET_SIMULATE_MODEL_STEP (state: IDashboardState, payload: ESimulateModelStep) {
    state.simulateModelStep = payload
  },
  INSERT_QUDIT (state: IDashboardState) {
    state.qudits.length < 5 && state.qudits?.push({
      frequency: 5.17,
      variation: 0.02,
      anharmonicity: 0.12
    })
  },
  SET_SELECTED_QUDIT (state: IDashboardState, payload: IQudit) {
    state.selectedQudit = payload
    state.selectedCoupling = null
    state.designModelStep = null
  },
  INSERT_COUPLING (state: IDashboardState) {
    state.couplings.length < 6 && state.couplings?.push({
      controlKnob: false,
      frequency: 0.01,
      variation: 0.02,
      constants: []
    })
  },
  SET_SELECTED_COUPLING (state: IDashboardState, payload: ICoupling) {
    state.selectedCoupling = payload
    state.selectedQudit = null
    state.designModelStep = null
  },
  INSERT_CONSTANT_IN_COUPLING (state: IDashboardState) {
    state.selectedCoupling?.constants?.push({
      id: Math.random()
    })
  }
}

export default mutation
