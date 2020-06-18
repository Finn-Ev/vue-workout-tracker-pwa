export const namespaced = true;

export const state = {
  dialog: {
    show: false
  }
};

export const mutations = {
  SET_DIALOG(state, dialogData) {
    state.dialog = dialogData;
  },
  CLOSE_DIALOG(state) {
    state.dialog = {
      show: false
    };
  }
};
export const actions = {
  setDialog({ commit }, dialogData) {
    commit("SET_DIALOG", dialogData);
  },
  closeDialog({ commit }) {
    commit("CLOSE_DIALOG");
  }
};
