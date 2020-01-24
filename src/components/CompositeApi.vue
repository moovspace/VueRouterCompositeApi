<template>
    <div class="hello">
        <h1> {{ user }} </h1>
        <button @click="appendName"> Click me </button>
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
</style>
