import { createStore } from 'vuex'

const urlApi = "https://server-notas-api.herokuapp.com/notas/";

export default createStore({
  state: {
    notas: []
  },
  mutations: {
    getNotas(state, notas) {
      state.notas = notas;
    },
    nuevaNota(state, nota) {
      state.notas = [...state.notas, nota];
    },
    borrarNota(state, nota) {
      state.notas = state.notas.filter(alumno => alumno !== nota);
    },
    modificarNota(state, { id, notaNumerica }) {
      state.notas = state.notas.map(nota => {
        if (nota.id === id) {
          return {
            ...nota,
            nota: notaNumerica
          }
        } else {
          return nota;
        }
      });
    }
  },
  actions: {
    async cargaNotas({ commit }) {
      const resp = await fetch(urlApi);
      const notas = await resp.json();
      commit("getNotas", notas);
    },
    async crearNota({ commit, dispatch }, nota) {
      const resp = await fetch(urlApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nota)
      });
      if (resp.status === 201) {
        const nuevaNota = await resp.json();
        commit("nuevaNota", nuevaNota);
        dispatch("cargaNotas");
      }
    },
    async borraNota({ commit, dispatch }, nota) {
      const resp = await fetch(urlApi + nota.id, { method: "DELETE" });
      if (resp.status === 200) {
        commit("borrarNota", nota);
        dispatch("cargaNotas");
      }
    },
    async modificaNota({ commit, dispatch }, { id, notaNumerica }) {
      const resp = await fetch(urlApi + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nota: notaNumerica })
      });
      if (resp.status === 200) {
        commit("modificarNota", { id, notaNumerica });
        dispatch("cargaNotas");
      }
    }
  },
  modules: {
  }
})
