
const masterData = [
    {
        path: '/masterdata/qualification/',
        name: 'qualification',
        component: () => import('../views/admin/masterdata/qualification/Qualification.vue')
    },
    {
        path: '/masterdata/elr-certificate/',
        name: 'elr-certificate',
        component: () => import('../views/admin/masterdata/elr-certificate/ELRCertificate.vue')
    },
    {
        path: '/masterdata/financial-document/',
        name: 'financial-document',
        component: () => import('../views/admin/masterdata/financial-document/FinancialDocument.vue')
    }
]

export default masterData
