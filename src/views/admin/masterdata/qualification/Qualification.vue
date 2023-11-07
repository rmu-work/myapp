<template>
    <div>
        <v-card>
            <v-card-title class="d-flex justify-space-between">
                <!-- <div class="d-flex justify-space-between"> -->
                <h5>Qualification</h5>
                <!-- <div> -->
                <v-btn color="primary" @click="openForm = !openForm">Add</v-btn>
                <!-- </div> -->
                <!-- </div> -->
            </v-card-title>

            <v-card-text>

                <QualificationForm v-if="openForm" @formSuccess="formSuccess" @close="openForm = false"></QualificationForm>

                <div>
                    <vue-list ref="table" :store-action="'QualificationStore/QUALIFICATION_LIST'">
                        <template #item-actions="{ item }">
                            <div>
                                <v-btn text color="info" @click="update(item)">Edit</v-btn>
                                <v-btn text color="error" @click="remove(item)">Delete</v-btn>
                            </div>
                        </template>
                    </vue-list>
                </div>
            </v-card-text>
        </v-card>

        <v-dialog v-if="editDialog" v-model="editDialog" width="500">
            <QualificationForm form-type="UPDATE" :initial-data="editItem" @close="editDialog = false"
                @formSuccess="formSuccess"></QualificationForm>
        </v-dialog>

        <v-dialog v-if="confirmationDialog" v-model="confirmationDialog" width="400">
            <QualificationForm form-type="DELETE" :initial-data="editItem" @close="confirmationDialog = false"
                @formSuccess="formSuccess"></QualificationForm>
        </v-dialog>
    </div>
</template>

<script>
import QualificationForm from './QualificationForm.vue';

export default {
    name: 'Qualification',

    components: {
        QualificationForm
    },

    data() {
        return {
            form: true,
            openForm: false,
            editDialog: false,
            confirmationDialog: false,

            editItem: null
        }
    },

    methods: {
        formSuccess() {
            this.openForm = false;
            this.editDialog = false;
            this.confirmationDialog = false;
            this.editItem = null;
            this.$refs.table.loadData();
        },

        update(item) {
            this.editItem = {...item};
            this.editDialog = true;
        },

        remove(item) {
            this.editItem = {...item};
            this.confirmationDialog = true;
        },
    }
}
</script>

<style></style>