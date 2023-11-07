<template>
    <div>
        <v-card v-if="formType !== 'DELETE'">
            <v-card-title>
                {{ formType }}
            </v-card-title>

            <v-card-text>
                <v-form v-model="form" ref="form">
                    <v-row>
                        <v-col>
                            <v-text-field label="Qualification" :required="model.name.required" :rules="model.name.rules"
                                v-model="model.name.value"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-menu ref="menu" v-model="model.start_date.menu" :close-on-content-click="false"
                                transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="model.start_date.value" label="Date of Birth"
                                        :required="model.start_date.required" prepend-icon="mdi-calendar" readonly
                                        v-bind="attrs" v-on="on" :rules="model.start_date.rules"></v-text-field>
                                </template>
                                <v-date-picker v-model="model.start_date.value" scrollable></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col>
                            <v-menu ref="menu" v-model="model.end_date.menu" :close-on-content-click="false"
                                transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="model.end_date.value" label="Date of Birth"
                                        :required="model.end_date.required" prepend-icon="mdi-calendar" readonly
                                        v-bind="attrs" v-on="on" :rules="model.end_date.rules"></v-text-field>
                                </template>
                                <v-date-picker v-model="model.end_date.value" scrollable></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col>
                            <v-text-field label="Percentage" :required="model.grade.required" v-model="model.grade.value"
                                :rules="model.grade.rules"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-textarea row="1" label="Remarks" :required="model.remarks.required"
                                v-model="model.remarks.value" :rules="model.remarks.rules"></v-textarea>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="primary" small @click="$emit('close')">
                    Close
                </v-btn>
                <v-btn color="primary" @click="formSubmit" small :loading="loader">
                    <v-icon small>mdi-content-save-outline</v-icon> Save
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-card v-else>
            <v-card-title>Confirmation</v-card-title>
            <v-card-text style="text-align: left;">
                <span>Are you sure?</span>
            </v-card-text>
            <v-card-actions>
                <template>
                    <v-spacer></v-spacer>
                    <v-btn small text @click="$emit('close')">Close</v-btn>
                    <v-btn color="success" :loading="loader" small text @click="deleteSubmit">Confirm</v-btn>
                </template>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { initiateForm } from '@/utils/helpers'

export default {
    name: 'AcademicsForm',

    props: {
        formType: {
            type: String,
            default: 'CREATE'
        },

        initialData: {
            type: Object,
            default() {
                return {};
            }
        }
    },

    data() {
        return {
            model: {
                name: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'University/School Name is required',
                    ]
                },

                qualification: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'qualification is required',
                    ]
                },

                start_date: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'Start Date is required',
                    ],
                    menu: false,
                },

                end_date: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'End Date is required',
                    ],
                    menu: false,
                },

                grade: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'Percentage is required',
                    ]
                },

                remarks: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'Remarks is required',
                    ]
                }
            },

            form: true,
            loader: false,
        };
    },

    computed: {
        postUrl() {
            if (this.formType === 'CREATE') {
                return 'create_record/';
            } else if (this.formType === 'UPDATE') {
                return `${this.initialData.id}/update_record/`
            } else {
                return `${this.initialData.id}/delete_record/`
            }
        }
    },

    mounted() {
        if (this.formType !== 'DELETE') {
            initiateForm(this.formType, this.model, this.initialData);
        }
    },

    methods: {
        formSubmit() {
            if (this.$refs.form.validate()) {
                this.loader = true;
                this.$store.dispatch(
                    'AcademicsStore/ACADEMICS_POST',
                    {
                        custom_action: this.postUrl,
                        data: this.model,
                        formdata: false
                    }
                ).then(data => {
                    this.loader = false;
                    this.$emit('formSuccess')
                }).catch(err => {
                    console.log('err : ', err);
                    this.loader = false;
                })
            }
        },

        deleteSubmit() {
            this.loader = true;
            this.$store.dispatch(
                'AcademicsStore/ACADEMICS_DELETE',
                {
                    custom_action: this.postUrl,
                }
            ).then(data => {
                this.loader = false;
                this.$emit('formSuccess')
            }).catch(err => {
                console.log('err : ', err);
                this.loader = false;
            })
        }
    }
}
</script>

<style></style>
