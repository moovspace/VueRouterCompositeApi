import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const moduleOne = {
  state: {
    a: true,
    b: false,
    things: [],
    todos: [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": true
      }
    ]
  },
  getters: {
    allTodos: state => state.todos,
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  actions: {
    async loadThings ({ commit })
    {
      let response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
      commit("loadThings", response.data);
    },
    addThing: ({ commit }, payload) => {
      commit("addThing", payload);
    },
    deleteThing: ({ commit }, payload) => {
      commit("deleteThing", payload);
    }
  },
  mutations: {
    addThing(state, payload) {
      state.todos = [payload, ...state.todos];
    },
    deleteThing(state, payload) {
      let newArray = state.todos.filter(i => i.id !== payload);
      state.todos = newArray;
    },
    loadThings: (state, payload) => {
      state.todos = [...payload];
    }
  }
}

const store = new Vuex.Store({
  modules: {
    a: moduleOne
  }
});

// store.state.a // -> `moduleOnce`'s state

export default store
