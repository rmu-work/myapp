export default [
    {
        title: 'Dashboard',
        icon: 'mdi-home',
        link: '/dashboard/',
    },
    {
        title: 'Masterdata',
        icon: 'madi-database',
        link: '#',
        children: [
            {
                title: 'Qualification',
                icon: '',
                link: '/masterdata/qualification/',
            },
            {
                title: 'English Requirement Certificate',
                icon: '',
                link: '/masterdata/elr-certificate/',
            },
            {
                title: 'Financial Document',
                icon: '',
                link: '/masterdata/financial-document/',
            }
        ]
    },
    {
        title: 'University',
        icon: 'mdi-university',
        link: '/university/',
    },
    {
        title: 'Students',
        icon: 'mdi-user',
        link: '/students/',
    }
]