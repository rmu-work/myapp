<template>
    <div>
        <v-data-table class="elevation-0" :headers="generateHeaders" :loading="loader" :items-per-page="perPage"
            :items="items.results" :server-items-length="items.count" @click:row="handleClick">

            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>
                        <b>{{ title }}</b>
                    </v-toolbar-title>

                    <div v-if="showFilter" class="ml-2 mt-0">
                        <v-btn small outlined rounded tooltip="Apply Filter">
                            <v-icon small>mdi-filter</v-icon> Filter
                        </v-btn>
                    </div>
                    <div v-else>
                        <slot name="filter-space"></slot>
                    </div>
                    <v-spacer></v-spacer>

                    <v-card-title small class="ma-0 pa-0">
                        <v-text-field v-model="search_text" v-debounce:1000="search" rounded filled dense class="mt-4"
                            prepend-inner-icon="mdi-magnify" label="Search" single-line clearable></v-text-field>

                        <v-btn icon class="mb-2" @click="loadData"><v-icon>mdi-refresh</v-icon></v-btn>

                        <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn dark icon v-bind="attrs" v-on="on">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>Export</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-card-title>
                </v-toolbar>
            </template>
            
            <template v-slot:item.actions="{ item }">                
                <slot name="item-actions" :item="item"></slot>
            </template>

            <template v-slot:no-data>
                <div class="empty-state">
                    <v-icon large>
                        mdi-alert-circle-outline
                    </v-icon>
                    <h2>{{ noDataHeading }}</h2>
                    <p>{{ noDataMessage }}</p>
                </div>
            </template>

        </v-data-table>
    </div>
</template>

<script>

export default {
    name: 'VueList',

    props: {
        storeAction: {
            type: String,
            default: '',
            required: true
        },

        extraParams: {
            type: Object,
            default: null
        },

        perPage: {
            type: Number,
            default: 10
        },

        noDataHeading: {
            type: String,
            default: "No Data Available"
        },

        noDataMessage: {
            type: String,
            default: "We couldn't find any data for this table. Please check back later or contact support if you believe this is an error."
        },

        showFilter: {
            type: Boolean,
            default: true
        },

        title: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            headers: [],
            items: {
                results: [],
                count: 0
            },

            loader: false,
            search_text: ''
        };
    },

    mounted() {
        this.loadData();
    },

    computed: {
        generateHeaders() {
            return this.headers.filter(obj => obj.is_default)
        }
    },

    methods: {

        search() {
            this.loadData(`&search=${this.search_text}`)
        },

        getExtraParams() {
            let params = ``;
            if (this.extraParams) {
                const keys = Object.keys(this.extraParams);
                for (let i in keys) {
                    const value = keys[i];
                    params += `&${value}=${this.extraParams[value]}`
                }
            }
            return params
        },

        loadData(query = null) {
            this.loader = true;

            let extraParams = `?page=1&perpage=${this.perPage}`;
            extraParams += this.getExtraParams();

            if (query) {
                extraParams += query;
            }

            this.$store.dispatch(
                this.storeAction, extraParams
            ).then(response => {
                this.headers = response.data.columns;
                this.items = response.data;
                this.loader = false;
            }).catch(exception => {
                console.log('exception : ', exception);
                this.loader = false
            })
        },

        handleClick(data) {
            this.$emit('click', data)
        }
    }
}
</script>

<style></style>
