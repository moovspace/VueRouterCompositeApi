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
import { ref, reactive, computed, toRefs, watch, onMounted, onUpdated, onUnmounted } from "@vue/composition-api";

// Vue 3.x
// import { reactive, computed, toRefs, watch, onMounted, onUpdated, onUnmounted } from "vue";

export default {
    setup() {
        // Create object {value: 9}
        const capacity = ref(9);
        const attending = ref(["Tom", "Jerry", "Mickey"]);

        // When capacity change
        const spacesLeft = computed(() => {
            return capacity.value - attending.value.length;
        });

        // Methods
        function increaseCapacity() {
            capacity.value++;
        }

        // Watchers, fire when obj change
        const Watch = watch(capacity, (newVal, oldVal) => {
            alert("Changed " + newVal + ' ' + oldVal)
        });

        // Hooks
        onMounted(() => { alert("Clock Object mounted") });
        onUpdated(() => { alert("Clock Object updated") });
        onUnmounted(() => { alert("Clock Object unmounted") });

        return { capacity, attending, spacesLeft, increaseCapacity };
    }
}
</script>

<style scoped>
/* style only for component with: scoped */
*{
    box-sizing: border-box; color: #09f;
}
</style>