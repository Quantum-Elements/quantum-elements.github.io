import { GetterTree } from 'vuex'
import { IDashboardState } from './state'
import { StateInterface } from '../index'

const getters: GetterTree<IDashboardState, StateInterface> = {
  // someGetter (/* state */) {
  // return true;
  // }
  // getRouteParams (state:IDashboardState) {
  //   console.log('testing window locations', window.location.href)
  // }
}

export default getters
