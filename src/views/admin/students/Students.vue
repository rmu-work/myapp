<template>
    <div>
        <v-card>
            <v-card-title class="d-flex justify-space-between">
                <h5>Students</h5>
            </v-card-title>

            <v-card-text>
                <vue-list ref="table" :store-action="'UserStore/USER_LIST'">
                    <template #item-actions="{ item }">
                        <div>
                            <v-btn color="primary" text @click="$router.push({path : `/profile/${item.id}/`})">USER PROFILE</v-btn>
                        </div>
                    </template>
                </vue-list>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

export default {
    name: 'Students'
}
</script>

<style></style>