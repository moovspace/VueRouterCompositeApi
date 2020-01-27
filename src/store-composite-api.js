// Composition Api store
import { provide, inject } from '@vue/composition-api';

const StoreSymbol = Symbol();

export function provideStore(store){
    provide(StoreSymbol, store);
}

export function useStore(){
    const store  = inject(StoreSymbol);
    if(!store){
        // future
    }
    return store;
}

// How to use in App.vue
// <script>
// // This in App.vue Composite Api Store
// import { provideStore } from './store-composite-api'
// export default {
//     props: {
//         name: String
//     },
//     setup(props, {root: {$store}}) {
//         // Set global store
//         provideStore($store);
//     }
// }
// </script>


// How to use in component StoreCompositeApi.vue
// <script>
// // Composite Api Store Import
// import { useStore } from '../store-composite-api'
// export default {
//   setup(){
//     let store = useStore();
//     let allTodos = store.getters.allTodos;
//     return { allTodos }
//   }
// }
// </script>