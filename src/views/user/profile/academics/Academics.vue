<template>
    <div>
        <v-card>
            <v-card-title class="d-flex justify-space-between">
                <h5>Academics</h5>
                <v-btn color="primary" @click="openForm = !openForm">Add</v-btn>
            </v-card-title>

            <v-card-text>

                <AcademicsForm v-if="openForm" @formSuccess="formSuccess" @close="openForm = false"></AcademicsForm>

                <div>
                    <vue-list ref="table" :store-action="'AcademicsStore/ACADEMICS_LIST'">
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
            <AcademicsForm form-type="UPDATE" :initial-data="editItem" @close="editDialog = false"
                @formSuccess="formSuccess"></AcademicsForm>
        </v-dialog>

        <v-dialog v-if="confirmationDialog" v-model="confirmationDialog" width="400">
            <AcademicsForm form-type="DELETE" :initial-data="editItem" @close="confirmationDialog = false"
                @formSuccess="formSuccess"></AcademicsForm>
        </v-dialog>
    </div>
</template>

<script>
import AcademicsForm from './AcademicsForm.vue';

export default {
    name: 'Academics',

    components: {
        AcademicsForm
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