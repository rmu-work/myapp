<template>
    <v-row class="user-bio-panel">
        <!-- user profile -->
        <v-col cols="12">
            <v-card class=" rounded-xl">
                <v-card-title class="justify-center flex-column">
                    <v-avatar :color="details.profile_picture ? '' : 'primary'"
                        :class="details.profile_picture ? '' : 'v-avatar-light-bg primary--text'" size="150"
                        class="mt-5 mb-5">
                        <v-img v-if="details.profile_picture" :src="details.profile_picture" />
                        <span v-else class="font-weight-semibold text-5xl">{{ details.full_name }}</span>
                    </v-avatar>
                    <span class="mb-2">{{ details.first_name + ' ' + details.last_name }}</span>
                </v-card-title>

                <v-card-text>
                    <h6 class="ml-2">Personal Details</h6>
                    
                    <v-divider class="mx-4"></v-divider>
                    
                    <v-list>
                        <!-- Phone -->
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="primary">
                                    mdi-phone
                                </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ details.contact_number }}</v-list-item-title>
                                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-icon>
                                <v-icon color="primary">mdi-message-text</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                        
                        <v-divider></v-divider>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="primary">
                                    mdi-email
                                </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ details.email }}</v-list-item-title>
                                <v-list-item-subtitle>Work</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>


                        <v-divider></v-divider>
                        
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="primary">
                                    mdi-domain
                                </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title> <span>{{ details.date_of_birth }}</span> </v-list-item-title>
                                <v-list-item-subtitle>Date Of Birth</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        
                        <v-divider></v-divider>

                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon color="primary">
                                    mdi-office-building
                                </v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ details.address }}</v-list-item-title>
                                <v-list-item-subtitle> Address </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                    </v-list>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: 'BioPanel',

    props: {
        details: {
            type: Object,
            default() {
                return {};
            }
        }
    }
}
</script>

<style></style>
