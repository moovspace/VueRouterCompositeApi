<template>
    <div>
        <h2>Attending</h2>

        <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>

        <ul>
            <li v-for="(name, index) in attending" :key="index"> {{ name }} </li>
        </ul>

        <button @click="increaseCapacity()">Increase Capacity</button>
    </div>
</template>

<script>
/* ref, reactive, computed, watch, onMounted, onUpdated, onUnmounted */
// Vue 2.x,
import { reactive, computed, toRefs, watch, onMounted, onUpdated, onUnmounted } from "@vue/composition-api";

// Vue 3.x
// import { reactive, computed, toRefs, watch, onMounted, onUpdated, onUnmounted } from "vue";

export default {
    setup() {
        // Reactive takes an object and returns a reactive object
        const event = reactive({
            capacity: 9,
            attending: ["Tom", "Jerry", "Mickey"],
            spacesLeft: computed(() => { return event.capacity - event.attending.length; })
        });

        // Methods
        function increaseCapacity() {
            event.capacity++;
        }

        function addSctipt(){
            let js = document.createElement('script')
            js.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
            document.head.appendChild(js)
        }

        // Watchers, fire when obj change
        const Watch = watch(event, (newVal, oldVal) => {
            alert("Changed " + newVal + ' ' + oldVal)
        });

        // Hooks
        onMounted(() => { alert("Clock Object mounted") });
        onUpdated(() => { alert("Clock Object updated") });
        onUnmounted(() => { alert("Clock Object unmounted") });

        // Notice we don’t have to use .value since the object is reactive
        // toRefs creates a plain object with reactive references
        return { ...toRefs(event), increaseCapacity };
    }
};
</script>

<style scoped>
/* style only for component with: scoped */
*{
    box-sizing: border-box; color: #09f;
}
</style>