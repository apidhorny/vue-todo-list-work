<template>
    <nav>
        <div class="nav-wrapper blue-grey darken-2">
            <router-link to="/" class="brand-logo">ToDoLister</router-link>
            <ul class="right hide-on-med-and-down">
                <router-link tag="li" to="/" exact active-class="active"
                    ><a href="#">Create</a></router-link
                >
                <router-link tag="li" to="/list" active-class="active"
                    ><a href="#">List</a></router-link
                >
                <router-link tag="li" to="/task/:id" active-class="active"
                    ><a href="#">:Task</a></router-link
                >
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
    padding: 0 2rem;
}
</style>
