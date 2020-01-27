<template>
  <div>
    <h2>{{ formattedMoney }}</h2>
    <div class="box">
        <input v-model="delta" type="number">
        <div class="mbtn" @click="add">Add</div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted, onUnmounted, onUpdated } from "@vue/composition-api";

export default {
  setup() {
    // State, create object {value: 10}, {value: 1}
    const money = ref(10);
    const delta = ref(1);

    // Computed props, run when money obj change
    const formattedMoney = computed(() => money.value.toFixed(2));

    // Hooks
    onMounted(() => { alert("Clock Object mounted") });
    onUpdated(() => { alert("Clock Object updated") });
    onUnmounted(() => { alert("Clock Object unmounted") });

    // Methods, for @click="add"
    const add = () => (money.value += Number(delta.value));

    // Watchers, fire when obj change
    const moneyWatch = watch(money, (newVal, oldVal) => {
      alert("Money changed " + newVal + ' ' + oldVal)
    });

    // Data
    return {delta, money, formattedMoney, add, moneyWatch };
  }
};
</script>

<style scoped>
.box{margin: auto;; text-align: center; max-width: 400px; display: flex}
.mbtn{padding: 10px 20px; margin-left: 10px; width: 40%; border: 1px solid #273849; border-radius: 5px; cursor: pointer}
input[type=number] {
    width: 60%;
  box-sizing:border-box;
}
</style>
