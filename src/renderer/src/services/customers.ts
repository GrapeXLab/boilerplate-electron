import { axiosInstance } from '../lib/client/axios.client'
import { Requester } from './requester'
import { AxiosInstance, AxiosResponse } from 'axios'

class Customer {
  public requester: Requester

  constructor(client: AxiosInstance) {
    this.requester = new Requester(client)
  }

  public async findAll(): Promise<AxiosResponse<any>> {
    return this.requester.get<any>('/customers')
  }

  public async findById(id: string): Promise<AxiosResponse<any>> {
    return this.requester.get<any>(`/customers/${id}`)
  }
}

export default new Customer(axiosInstance)
