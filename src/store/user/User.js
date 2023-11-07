import Axios from '@/plugins/axios.js'
import { generatePayload } from '@/utils/helpers'


const state = {};

const getters = {};

const mutations = {};

const actions = {
    USER_REGISTER({ commit }, options) {
        let payload = null;
        if (options.formdata) {
            payload = options.data
        } else {
            payload = generatePayload(options.data)
        }
        return new Promise((resolve, reject) => {
            Axios.post('/api/register-user/', payload)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    USER_LIST({ commit }, value) {
        return new Promise((resolve, reject) => {
            Axios.get('/api/students/' + value)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    USER_DETAILS({ commit }, value) {
        return new Promise((resolve, reject) => {
            Axios.get('/api/students/' + value)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
};

export const UserStore = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
