import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from '@/plugins/axios.js'

import { UserStore } from './user/User'
import { AcademicsStore } from './user/Academics'
import { QualificationStore } from './masterdata/Qualification'
import { ELRCertificateStore } from './masterdata/ELRCertificate'
import { FinancialDocumentStore } from './masterdata/FinancialDocument'
import { AuthenticationStore } from './Authentication'
import { UniversityStore } from './University'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},

    getters: {},

    mutations: {},

    actions: {},

    modules: {
        AuthenticationStore,
        UserStore,
        UniversityStore,
        QualificationStore,
        ELRCertificateStore,
        FinancialDocumentStore,
        AcademicsStore,
    }
})
