import { AxiosInstance, AxiosResponse, Method } from 'axios'
import { ipcRenderer } from 'electron'

export class Requester {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  private logger(name: string, message: any, type: 'log' | 'error' | 'warn' = 'log'): void {
    ipcRenderer.send('logger', { name, message, type })
  }

  public async req<T>(
    method: Method,
    resource: string,
    headers?: any,
    body?: any
  ): Promise<AxiosResponse<T>> {
    const data = {
      method: method.toUpperCase(),
      resource: resource,
      headers: headers
    }

    this.logger('API Request', {
      ...data,
      body: body
    })

    const resp: AxiosResponse<T> = await this.instance.request({
      method,
      url: resource,
      headers,
      data: body,
      responseType: 'json'
    })

    this.logger('API Response', {
      ...data,
      body: resp.data,
      status: resp.status,
      response: resp
    })

    return resp
  }

  public async get<T>(resource: string, headers?: any): Promise<AxiosResponse<T>> {
    return this.req<T>('GET', resource, headers)
  }

  public async post<T>(resource: string, body?: any, headers?: any): Promise<AxiosResponse<T>> {
    return this.req<T>('POST', resource, headers, body)
  }

  public async put<T>(resource: string, body?: any, headers?: any): Promise<AxiosResponse<T>> {
    return this.req<T>('PUT', resource, headers, body)
  }

  public async delete<T>(resource: string, headers?: any): Promise<AxiosResponse<T>> {
    return this.req<T>('DELETE', resource, headers)
  }

  public async patch<T>(resource: string, body?: any, headers?: any): Promise<AxiosResponse<T>> {
    return this.req<T>('PATCH', resource, headers, body)
  }
}
