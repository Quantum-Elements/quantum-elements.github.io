import { MutationTree } from 'vuex'
import { QEState } from './state'

const mutation: MutationTree<QEState> = {
  // These mutations are the ones that change the state
  // eslint-disable-next-line space-before-function-paren
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  }

}

export default mutation
