<template>
<<<<<<< HEAD
    <div>
        <h1>ss</h1>
        <!-- <p @click="tass">sdfsdf</p> -->
=======
    <div class="row">
        <div v-if="task" class="col s6 offset-s3">
            <h1>{{ task.title }}</h1>
            <form @submit.prevent="submitHandler">
                <div class="chips" ref="chips"></div>

                <div class="input-field">
                    <textarea
                        v-model="description"
                        id="description"
                        class="materialize-textarea"
                    ></textarea>
                    <label for="description">Description</label>
                    <span
                        class="character-counter"
                        style="float: right; font-size: 12px;"
                        >{{ description.length }}/2048</span
                    >
                </div>

                <input type="text" ref="datepicker" />

                <button class="btn" type="submit" style="margin-right: 1rem">
                    Update
                </button>
                <button class="btn blue" type="button" @click="comleteTask">
                    Complete Task
                </button>
            </form>
        </div>
        <div v-else>
            <p>No ToDo</p>
        </div>
>>>>>>> e8c8bd6fad38b57c3f176d0e0107aad895bc3c31
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
<<<<<<< HEAD
=======
    data: () => ({
        description: '',
        chips: null,
        date: null,
    }),
    mounted() {
        this.chips = M.Chips.init(this.$refs.chips, {
            placeholder: 'Task tags',
            data: this.task.tags,
        });
        this.description = this.task.description;
        this.date = M.Datepicker.init(this.$refs.datepicker, {
            format: 'dd.mm.yyyy',
            defaultDate: new Date(this.task.date),
            setDefaultDate: true,
        });
        setTimeout(() => {
            M.updateTextFields();
        }, 0);
    },
    methods: {
        submitHandler() {
            this.$store.dispatch('updateTask', {
                id: this.task.id,
                description: this.description,
                date: this.date.date,
            });
            this.$router.push('/list');
        },
        comleteTask() {
            this.$store.dispatch('comleteTask', this.task.id);
            this.$router.push('/list');
        },
    },
    destroyed() {
        if (this.date && this.date.destroy) {
            this.date.destroy();
        }

        if (this.chips && this.chips.destroy) {
            this.chips.destroy();
        }
    },
>>>>>>> e8c8bd6fad38b57c3f176d0e0107aad895bc3c31
};
</script>
