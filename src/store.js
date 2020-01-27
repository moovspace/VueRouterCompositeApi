import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const moduleOne = {
  state: {
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
    ],
    todos1: [
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
    allTodos1: state => state.todos1,
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  // actions have to be synchronous and asynchronous
  actions: {
    async loadThings ({ commit })
    {
      let response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
      // Run mutations update
      commit("loadThings", response.data);
    },
    async loadThings1 ({ commit })
    {
      let response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4');
      // Run mutations update
      commit("loadThings1", response.data);
    },
    async addThing ({ commit }, title) {
      let response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
      // Run mutations update
      commit("addThing", response.data);
    },
    deleteThing: ({ commit }, data) => {
      commit("deleteThing", data);
    }
  },
  // mutations have to be synchronous
  mutations: {
    // Update data
    addThing(state, todo) {
      // state.todos.unshift(todo);
      state.todos = [todo, ...state.todos];
    },
    deleteThing(state, data) {
      let newArray = state.todos.filter(i => i.id !== data);
      state.todos = newArray;
    },
    loadThings: (state, data) => {
      state.todos = [...data];
    },
    loadThings1: (state, data) => {
      state.todos1 = [...data];
    }
  }
}

const store = new Vuex.Store(moduleOne);

// const store = new Vuex.Store({
//   modules: {
//     a: moduleOne
//   }
// });

// store.state.a // -> `moduleOnce`'s state

export default store
