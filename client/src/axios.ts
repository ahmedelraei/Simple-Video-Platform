import axios, { AxiosInstance } from 'axios'
import { ENDPOINT } from './constants'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: ENDPOINT,
  timeout: 0,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    const originalRequest = error.config

    if (typeof error.response === 'undefined') {
      alert(
        'A server/network error occurred. ' +
          'Looks like CORS might be the problem. ' +
          'Sorry about this - we will get it fixed shortly.'
      )
      return Promise.reject(error)
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === ENDPOINT + '/token/refresh/'
    ) {
      window.location.href = '/'
      return Promise.reject(error)
    }

    if (
      error.response.data.code === 'token_not_valid' &&
      error.response.status === 401 &&
      error.response.statusText === 'Unauthorized'
    ) {
      const refreshToken = localStorage.getItem('refresh_token')

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]))

        const now = Math.ceil(Date.now() / 1000)
        console.log(tokenParts.exp)

        if (tokenParts.exp > now) {
          return axiosInstance
            .post('/users/authenticate/refresh/', { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem('access_token', response.data.access)
              ;(
                axiosInstance.defaults.headers as unknown as Record<
                  string,
                  string
                >
              )['Authorization'] = 'Bearer ' + response.data.access
              originalRequest.headers['Authorization'] =
                'Bearer ' + response.data.access

              return axiosInstance(originalRequest)
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          console.log('Refresh token is expired', tokenParts.exp, now)
          //window.location.href = '/login'
          if (localStorage.getItem('authenticated')) {
            localStorage.removeItem('authenticated')
          }
        }
      } else {
        console.log('Refresh token not available.')
        //window.location.href = '/login'
        if (localStorage.getItem('authenticated')) {
          localStorage.removeItem('authenticated')
        }
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
