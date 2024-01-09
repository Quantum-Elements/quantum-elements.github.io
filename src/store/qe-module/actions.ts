import { ActionTree } from 'vuex'
import { QEState } from './state'
import { StateInterface } from '../index'
// import { netsuiteBaseURL } from '@/libs/axios'
import axios, { AxiosResponse } from 'axios'
// import { NetworkServiceResponse } from '@/models/networkServiceResponse'

// Actions are asynchronous
const actions: ActionTree<QEState, StateInterface> = {
  // eslint-disable-next-line space-before-function-paren
  someAction(/* { commit }, payload  */) {
    // a line to prevent linter errors
  }
}

export default actions
