import { AxiosInstance, AxiosResponse, Method } from 'axios'
import { Response } from './response'

export default class AxiosClientAdapter {
  public requester: AxiosInstance

  constructor(requester: AxiosInstance) {
    this.requester = requester
  }

  private async req<T>(
    method: Method,
    resource: string,
    headers?: any,
    body?: any
  ): Promise<Response<T>> {
    const resp: AxiosResponse<T> = await this.requester.request({
      method,
      url: resource,
      headers,
      data: body,
      responseType: 'json'
    })
    return {
      status: resp.status,
      body: resp.data
    }
  }

  public async get<T>(resource: string, headers?: any): Promise<Response<T>> {
    return this.req<T>('GET', resource, headers)
  }

  public async post<T>(resource: string, body?: any, headers?: any): Promise<Response<T>> {
    return this.req<T>('POST', resource, headers, body)
  }

  public async put<T>(resource: string, body?: any, headers?: any): Promise<Response<T>> {
    return this.req<T>('PUT', resource, headers, body)
  }

  public async delete<T>(resource: string, headers?: any): Promise<Response<T>> {
    return this.req<T>('DELETE', resource, headers)
  }

  public async patch<T>(resource: string, body?: any, headers?: any): Promise<Response<T>> {
    return this.req<T>('PATCH', resource, headers, body)
  }
}
