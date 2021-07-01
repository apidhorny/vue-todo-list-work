<template>
    <div>
        <h1>ss</h1>
        <!-- <p @click="tass">sdfsdf</p> -->
    </div>
</template>

<script>
export default {
    name: 'Task',
    computed: {
        task() {
            return this.$store.getters.taskById(+this.$route.params.id);
        },
    },
};
</script>
