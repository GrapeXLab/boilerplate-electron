import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-type': 'application/json'
  }
})
