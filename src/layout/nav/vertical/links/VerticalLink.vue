<template>
    <v-list-item class="link" @click="routeLink(item.link)">
        <v-list-item-icon>
            <v-icon :icon="item.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>

export default {
    name: 'VerticalLink',

    props: {
        item: {
            type: Object,
            required: true,
        }
    },

    methods: {
        routeLink(link) {
            if (this.$route.path === link) return;
            this.$router.push({path: link})
        }
    }
}
</script>

<style lang="scss" scoped>
.link {
    cursor: pointer;
}
</style>
