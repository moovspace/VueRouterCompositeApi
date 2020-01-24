<template>
    <div class="hello">

        <h1> {{ user }} </h1>
        <div class="box">
            <button type="button" class="mbtn btn btn-success" @click="appendName"> Push Me </button>
        </div>

    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { computed } from '@vue/composition-api';

export default {
    props: {
        name: String
    },
    setup(props) {
        // console.log(props.name);
        // context.attrs
        // context.slots
        // context.emit
        // context.parent
        // context.root

        const user = ref(props.name);

        const appendName = () => {
            user.value = `Hello ${props.name}`
        }

        const plusOne = computed(() => {
            user.value = `Hello Miszczu ${props.name}`
        })

        return { user, appendName, plusOne }
    }
}
</script>

<style scoped>
.helo{
    font-weight: 22px; color: #09f;
}

.box{margin: auto;; text-align: center; max-width: 400px; display: flex}
button {margin: auto; margin-top: 20px; width: auto; cursor: pointer}
input[type=number] {width: 60%; box-sizing:border-box;}

.btn-success {
    color: #fff;
    background-color:#42b983;
    border-color:#28a745;
}
</style>
