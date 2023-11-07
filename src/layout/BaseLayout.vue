<template>
    <v-app>
        <VerticalNav></VerticalNav>
        <v-main>

            <div class="container mt-5">
                <slot></slot>
            </div>
        </v-main>
    </v-app>
</template>

<script>
import VerticalNav from './nav/vertical/VerticalNav.vue'

export default {
    components: {
        VerticalNav
    }
}
</script>

<style></style>
