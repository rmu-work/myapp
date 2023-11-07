<template>
    <div>
        <v-card v-if="formType !== 'DELETE'">
            <v-card-title>
                {{ formType }}
            </v-card-title>

            <v-card-text>
                <v-form ref="form" v-model="form">
                    <v-text-field label="Qualification" v-model="model.name.value" :rules="model.name.rules"></v-text-field>
                    <v-textarea label="Description" rows="2" v-model="model.description.value"></v-textarea>
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
    name: 'QualificationForm',

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
            form: true,
            loader: false,
            model: {
                name: {
                    value: '',
                    rules: [
                        v => !!v || 'Name is required',
                    ],
                },
                description: {
                    value: '',
                }
            }
        }
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
                    'QualificationStore/QUALIFICATION_POST',
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
                'QualificationStore/QUALIFICATION_DELETE',
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
