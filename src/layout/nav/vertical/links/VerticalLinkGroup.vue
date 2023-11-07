<template>
    <v-list-group>
        <template #prependIcon>
            <v-icon :icon="item.icon">
                {{ item.icon }}
            </v-icon>
        </template>
        <template #activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </template>

        <div class="ml-5">
            <component :is="getComponent(child)" v-for="(child, index) in item.children"
                :key="index" :item="child"></component>
        </div>
    </v-list-group>
</template>

<script>
import VerticalLink from './VerticalLink.vue'
import VerticalLinkGroup from './VerticalLinkGroup.vue'

export default {
    name: 'VerticalLinkGroup',

    components: {
        VerticalLink,
        VerticalLinkGroup
    },

    props: {
        item: {
            type: Object,
            required: true,
        }
    },

    setup(props, { emit }) {

        const getComponent = (item) => {
            if (item.children) return 'vertical-link-group';
            else return 'vertical-link';
        }

        return {
            // Function
            getComponent
        }
    }
}
</script>

<style lang="scss" scoped>
.link {
    cursor: pointer;
}
</style>
