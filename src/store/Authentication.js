import Axios from '@/plugins/axios.js'
import { generatePayload } from '@/utils/helpers'


const state = {};

const getters = {};

const mutations = {};

const actions = {
    LOGIN({commit}, value) {
        return new Promise((resolve, reject) => {
            Axios.post('/api/login/', value)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
};

export const AuthenticationStore = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
