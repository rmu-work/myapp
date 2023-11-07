<template>
    <div>
        <v-card v-if="formType !== 'DELETE'">
            <v-card-title>
                {{ formType }}
            </v-card-title>

            <v-card-text>
                <v-form ref="form" v-model="form">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Cerificate" v-model="model.name.value"
                                :rules="model.name.rules"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field type="number" label="Total Subject" v-model="model.total_subjects.value"
                                :rules="model.total_subjects.rules"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field type="number" label="Total Mark" v-model="model.mark_out_of.value"
                                :rules="model.mark_out_of.rules"></v-text-field>
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
    name: 'ELRCertificateForm',

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
                total_subjects: {
                    value: '',
                    rules: [
                        v => !!v || 'Total Subject is required',
                    ],
                },
                mark_out_of: {
                    value: '',
                    rules: [
                        v => !!v || 'Total Mark is required',
                    ],
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
                    'ELRCertificateStore/ELR_CERTIFICATE_POST',
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
                'ELRCertificateStore/ELR_CERTIFICATE_DELETE',
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
