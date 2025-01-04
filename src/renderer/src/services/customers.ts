import { Response } from './response'
import AxiosClientAdapter from './client-adapter'

export default class CustomerService {
  public clientAdapter: AxiosClientAdapter

  constructor(clientAdapter: AxiosClientAdapter) {
    this.clientAdapter = clientAdapter
  }

  public async findAll(): Promise<Response<any>> {
    return this.clientAdapter.get<any>('/customers')
  }
}
