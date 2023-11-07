import axiosModule from 'axios'
// const env = process.env.VUE_APP_ENV
// import store from '@/store'

var Axios = axiosModule.create({
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true,
})

Axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        return response
    },
    function (error) {
        // Do something with response error

        console.log('Axios Global Eror', error.response.status)
        // if (error.response.status == 403 || error.response.status == 401) {
        //   window.location.replace('/pm')
        //   return
        // } else {
        //   return Promise.reject(error)
        // }

        return error
    },
)

export default Axios
