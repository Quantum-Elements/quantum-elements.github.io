import { createStore } from 'vuex'

// My custom modules
import DashboardModule from './dashboard-module'
import QEModule from './qe-module'
import { IDashboardState } from './dashboard-module/state'
import { QEState } from './qe-module/state'
// import exampleModule from './module-template'
// import { ExampleStateInterface } from './module-template/state'

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  // example: ExampleStateInterface
  dashboard: IDashboardState,
  QE: QEState
}

export default createStore<StateInterface>({
  modules: {
    dashboard: DashboardModule,
    QE: QEModule
  }
})
