<template>
    <div>
        {{ details }}
        <v-row>
            <v-col cols="12" md="5" lg="3">
                <BioPanel :details="details"></BioPanel>
            </v-col>

            <v-col cols="12" md="7" lg="9">
                <v-card>
                    <v-toolbar flat color="primary" dark>
                        <v-toolbar-title>Other Details</v-toolbar-title>
                    </v-toolbar>
                    <v-tabs vertical>
                        <v-tab>
                            <v-icon left>
                                mdi-account
                            </v-icon>
                            Academics
                        </v-tab>
                        <v-tab>
                            <v-icon left>
                                mdi-lock
                            </v-icon>
                            Language Certificate
                        </v-tab>
                        <v-tab>
                            <v-icon left>
                                mdi-access-point
                            </v-icon>
                            Attachments
                        </v-tab>

                        <v-tab-item>
                            <Academics></Academics>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <p>
                                        Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
                                        convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices
                                        tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur
                                        ligula
                                        sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                                    </p>

                                    <p>
                                        Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
                                        convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                                        ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
                                        hac
                                        habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                                    </p>

                                    <p>
                                        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida
                                        magna mi
                                        a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus
                                        turpis
                                        vitae tortor. Aliquam eu nunc.
                                    </p>

                                    <p>
                                        Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean
                                        viverra
                                        rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                                    </p>

                                    <p class="mb-0">
                                        Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere
                                        eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse
                                        enim
                                        turpis, dictum sed, iaculis a, condimentum nec, nisi.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>
                                    <p>
                                        Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin
                                        viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan
                                        nisi
                                        mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                                    </p>

                                    <p class="mb-0">
                                        Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien
                                        ipsum,
                                        porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque
                                        eu,
                                        pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import BioPanel from './BioPanel.vue'
import Academics from './academics/Academics.vue'

export default {
    name: 'Profile',

    components: {
        BioPanel,
        Academics
    },

    data() {
        return {
            details: null,
            loader: false
        }
    },

    mounted() {
        this.loadData();
    },

    methods: {
        loadData() {
            this.loader = true;
            this.$store.dispatch(
                'UserStore/USER_DETAILS',
                `${this.$route.params.username}/`
            ).then(data => {
                this.details = data.data;
                this.loader = false;
            }).catch(err => {
                console.log('err : ', err);
                this.loader = false;
            })
        }
    }
}
</script>

<style></style>
