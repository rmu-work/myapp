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
                            <v-text-field label="University Name" :required="model.university_name.required"
                                :rules="model.university_name.rules" v-model="model.university_name.value"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field label="Contact Number" :type="model.contact_number.type"
                                :rules="model.contact_number.rules" :required="model.contact_number.required"
                                v-model="model.contact_number.value"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Email" :type="model.email.type" :required="model.email.required"
                                v-model="model.email.value" :rules="model.email.rules"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Website" :required="model.website.required" v-model="model.website.value"
                                :rules="model.website.rules"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field label="Country" :required="model.country.required" v-model="model.country.value"
                                :rules="model.country.rules"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="State" :required="model.state.required" v-model="model.state.value"
                                :rules="model.state.rules"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-textarea row="1" label="Address" :required="model.address.required"
                                v-model="model.address.value" :rules="model.address.rules"></v-textarea>
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
    name: 'UniversityForm',

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
                university_name: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'First Name is required',
                    ]
                },

                contact_number: {
                    value: '',
                    required: true,
                    type: 'number',
                    rules: [
                        value => !!value || 'Contact Number is required',
                        value => value && value.length <= 10 || 'Required minimum of 10 Numbers',
                    ]
                },

                email: {
                    value: '',
                    required: true,
                    type: 'email',
                    rules: [
                        value => !!value || 'Email is required',
                        value => /.+@.+\..+/.test(value) || 'E-mail must be valid',
                    ]
                },

                website: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'Website is required',
                        value => (value && value.length <= 256) || 'URL must be less than 256 characters',
                        value => /(https?|ftp):\/\/[^\s/$.?#].[^\s]*/.test(value) || 'URL must be valid'
                    ]
                },

                country: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'Country is required',
                    ]
                },

                state: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'State is required',
                    ]
                },

                address: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'Address is required',
                    ]
                },
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
                    'UniversityStore/UNIVERSITY_POST',
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
                'UniversityStore/UNIVERSITY_DELETE',
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
