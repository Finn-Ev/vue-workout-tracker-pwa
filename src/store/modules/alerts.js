export const namespaced = true;

export const state = {
  alerts: []
};

let nextId = 1;

export const mutations = {
  SET_ALERT(state, alert) {
    state.alerts.push({
      ...alert,
      id: nextId++
    });
  },
  REMOVE_ALERT(state, alertId) {
    state.alerts = state.alerts.filter(alert => alert.id !== alertId);
  }
};
export const actions = {
  setAlert({ commit }, alert) {
    commit("SET_ALERT", alert);
  },
  removeAlert({ commit }, alertToRemove) {
    commit("REMOVE_ALERT", alertToRemove);
  }
};
