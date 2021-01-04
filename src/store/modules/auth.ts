import { MutationTree } from 'vuex';

export const state: any = {
  isSubmitting: false,
};

export const mutations: MutationTree<any> = {
  registerStart(state, payload: any) {
    state.isSubmitting = true;
  },
};


export default {
  state,
  mutations
}
