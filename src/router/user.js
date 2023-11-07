
const user = [
    {
        path: '/user/register/',
        name: 'user-register',
        component: () => import('../views/user/register/Register.vue')
    },

    {
        path: '/students/',
        name: 'students',
        component: () => import('../views/admin/students/Students.vue')
    },

    {
        path: '/profile/:username/',
        name: 'student-profile',
        component: () => import('../views/user/profile/Profile.vue')
    },
]

export default user
