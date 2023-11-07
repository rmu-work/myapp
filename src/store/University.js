import Axios from '@/plugins/axios.js'
import { generatePayload } from '@/utils/helpers'

const baseURL = '/api/university/'

const state = {};

const getters = {};

const mutations = {};

const actions = {

    UNIVERSITY_LIST({ commit }, value) {
        return new Promise((resolve, reject) => {
            Axios.get(baseURL + value)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    UNIVERSITY_POST({commit}, options) {
        let payload = null;
        if (options.formdata) {
            payload = options.data
        } else {
            payload = generatePayload(options.data)
        }
        return new Promise((resolve, reject) => {
            Axios.post(baseURL + options.custom_action, payload)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    UNIVERSITY_DELETE({ commit }, options) {
        return new Promise((resolve, reject) => {
            Axios.delete(baseURL + options.custom_action)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
};

export const UniversityStore = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
