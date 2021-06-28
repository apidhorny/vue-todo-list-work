<template>
    <div>
        <div class="row">
            <div class="col s6 offset-s3 ">
                <h1>Create Task</h1>
                <form @submit.prevent="submitHandler">
                    <div class="input-field ">
                        <input
                            v-model="title"
                            id="title"
                            type="text"
                            class="validate"
                            required
                        />
                        <label for="title">First Name</label>
                        <span
                            class="helper-text"
                            data-error="wrong"
                            data-success="right"
                        ></span>
                    </div>
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
                            style="float: right; font-size: 12px"
                            >{{ description.length }}/2048</span
                        >
                    </div>
                    <input type="text" ref="datepicker" />

                    <button class="btn" type="submit">ToDo</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Create',
    data() {
        return {
            description: '',
            title: '',
            chips: null,
            date: null,
        };
    },
    mounted() {
        this.chips = M.Chips.init(this.$refs.chips, {
            placeholder: 'Task Tag',
        });
        this.date = M.Datepicker.init(this.$refs.datepicker, {
            format: 'dd.mm.yyyy',
            defaultDate: new Date(),
            setDefaultDate: true,
        });
    },
    methods: {
        submitHandler() {
            const task = {
                title: this.title,
                description: this.description,
                id: Date.now(),
                status: 'active',
                tags: this.chips.chipsData,
                date: this.date.date,
            };
            this.$store.dispatch('createTask', task);
            this.$router.push('/list');
        },
        destroyed() {
            if (this.date && this.date.destroy) {
                this.date.destroy();
            }
            if (this.chips && this.chips.destroy) {
                this.chips.destroy();
            }
        },
    },
};
</script>
