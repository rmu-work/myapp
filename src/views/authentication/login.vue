<template>
    <v-card>
        <v-card-title>
            Login
        </v-card-title>

        <v-card-text>
            <v-form v-model="form" ref="form">
                <v-row>
                    <v-col>
                        <v-text-field v-model="model.username.value" :label="model.username.label"
                            :required="model.username.required" :rules="model.username.rules"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="model.password.value" :type="model.password.type"
                            :label="model.password.label" :required="model.password.required"
                            :rules="model.password.rules"></v-text-field>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="formSubmit">Login</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { generatePayload } from '@/utils/helpers'

export default {
    data() {
        return {
            form: true,
            model: {
                username: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'Username is required',
                    ],
                    label: 'Username'
                },

                password: {
                    value: '',
                    required: true,
                    rules: [
                        value => !!value || 'Password is required',
                    ],
                    type: 'password',
                    label: 'Password'
                }
            }
        };
    },

    methods: {
        formSubmit() {
            if (this.$refs.form.validate()) {
                const payload = generatePayload(this.model);
                this.$store.dispatch('AuthenticationStore/LOGIN', payload).then(response => {
                    console.log('response : ', response);
                    this.$router.push({path: '/dashboard'});
                }).catch(error => {
                    console.log('error : ', error.response);
                })
            }
        }
    }
}
</script>

<style></style>