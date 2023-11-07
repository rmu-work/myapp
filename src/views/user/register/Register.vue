<template>
    <div>
        <v-card>
            <v-card-title>Register</v-card-title>

            <v-card-text>
                <v-form v-model="form" ref="form">
                    <v-stepper v-model="stepper">
                        <v-stepper-header>
                            <v-stepper-step :complete="stepper > 1" :step="1" editable>
                                Basic Details
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step :step="2" editable>
                                Account Setup
                            </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                            <v-stepper-content :step="1">
                                <v-card elevation="0" height="450px">
                                    <v-card-text>
                                        <v-row>
                                            <v-col>
                                                <v-text-field label="First Name" :required="model.first_name.required"
                                                    :rules="model.first_name.rules"
                                                    v-model="model.first_name.value"></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-text-field label="Last Name" :required="model.last_name.required"
                                                    :rules="model.last_name.rules"
                                                    v-model="model.last_name.value"></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-text-field label="Contact Number" :type="model.contact_number.type"
                                                    :rules="model.contact_number.rules"
                                                    :required="model.contact_number.required"
                                                    v-model="model.contact_number.value"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col>
                                                <v-text-field label="Residency Status"
                                                    :required="model.residency_status.required"
                                                    v-model="model.residency_status.value"
                                                    :rules="model.residency_status.rules"></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-menu ref="menu" v-model="model.date_of_birth.menu"
                                                    :close-on-content-click="false" transition="scale-transition" offset-y
                                                    min-width="auto">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field v-model="model.date_of_birth.value"
                                                            label="Date of Birth" :required="model.date_of_birth.required"
                                                            prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"
                                                            :rules="model.date_of_birth.rules"></v-text-field>
                                                    </template>
                                                    <v-date-picker v-model="model.date_of_birth.value"
                                                        scrollable></v-date-picker>
                                                </v-menu>
                                            </v-col>
                                            <v-col>
                                                <v-text-field label="Country" :required="model.country.required"
                                                    v-model="model.country.value"
                                                    :rules="model.country.rules"></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-text-field label="State" :required="model.state.required"
                                                    v-model="model.state.value" :rules="model.state.rules"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col>
                                                <v-textarea row="2" label="Address" :required="model.address.required"
                                                    v-model="model.address.value" :rules="model.address.rules"></v-textarea>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn small text color="success" @click="stepper = 2">
                                            Continue
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-stepper-content>
                            <v-stepper-content :step="2">
                                <v-card elavation="0">
                                    <v-card-text>
                                        <v-row>
                                            <v-col>
                                                <v-text-field label="Email" :type="model.email.type"
                                                    :required="model.email.required" v-model="model.email.value"
                                                    :rules="model.email.rules"></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-text-field label="Password" :required="model.password.required"
                                                    :type="model.password.type" :rules="model.password.rules"
                                                    v-model="model.password.value"></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-text-field label="Conform Password"
                                                    :required="model.conform_password.required"
                                                    :type="model.conform_password.type"
                                                    :rules="model.conform_password.rules"
                                                    v-model="model.conform_password.value"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn small text @click="stepper = 1">
                                            Previous
                                        </v-btn>
                                        <v-btn small text color="success" @click="onSubmit">
                                            Continue
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

export default {
    name: 'Register',

    data() {
        return {
            model: {
                first_name: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'First Name is required',
                    ]
                },
                last_name: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'Last Name is required',
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
                date_of_birth: {
                    value: '',
                    required: true,
                    menu: false,
                    rules: [
                        value => !!value || 'DOB is required',
                    ]
                },
                contact_number: {
                    value: '',
                    required: true,
                    type: 'number',
                    rules: [
                        value => !!value || 'Contact Number is required',
                        value => value && value.length <= 10 || 'Required minimum of 10 Numbers',
                        // value => value && value.length > 11 || 'Only maximum of 10 Numbers allowed',
                    ]
                },
                residency_status: {
                    value: '',
                    required: false,
                    rules: []
                },
                portfolio: {
                    value: '',
                    required: false,
                    rules: []
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

                password: {
                    value: '',
                    required: true,
                    type: 'password',
                    rules: [
                        value => !!value || 'Password is required',
                    ]
                },

                conform_password: {
                    value: '',
                    required: true,
                    type: 'password',
                    rules: [
                        value => !!value || 'Password is required',
                        value => this.checkPassword(value) || 'your password is incorrect '
                    ]
                }
            },

            form: true,
            menu: false,

            stepper: 1,
        }
    },

    methods: {
        checkPassword(value) {
            return this.model.password.value === value;
        },

        onSubmit() {
            if (this.$refs.form.validate()) {
                console.log('Form Validated');
                console.log('model : ', this.model);

                this.$store.dispatch('UserStore/USER_REGISTER', {
                    data: this.model,
                    formdata: false
                }).then(response => {
                    this.$router.push({name: 'login'})
                }).catch(error => {
                    console.log('error : ', error.response);
                })
            }
        }
    }
}

</script>

<style></style>
