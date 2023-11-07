<template>
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" class="deep-purple accent-4" expand-on-hover permanent app>
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <v-img src="../../../assets/unisoo.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>Unisoo</v-list-item-title>

            <v-btn icon @click.stop="mini = !mini">
                <v-icon icon="mdi-chevron-left"></v-icon>
            </v-btn>
        </v-list-item>

        <v-list>
            <div v-for="(item, index) in menu" :key="index">
                <components :is="getComponent(item)" :item="item"></components>
            </div>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { ref } from '@vue/composition-api'

import menu from '@/utils/menu'

import VerticalLink from './links/VerticalLink.vue'
import VerticalLinkGroup from './links/VerticalLinkGroup.vue'

export default {
    name: 'VerticalNav',

    components: {
        VerticalLink,
        VerticalLinkGroup
    },

    data () {
        return {
            mini: true
        };
    },

    setup(props, { emit }) {
        const drawer = ref(true)
        // const mini = ref(true)

        const getComponent = (item) => {
            if (item.children) return 'vertical-link-group';
            else return 'vertical-link';
        }

        return {
            // Variables
            drawer,
            // mini,
            menu,

            // Functions
            getComponent
        }
    }
}
</script>

<style lang="scss" scoped></style>