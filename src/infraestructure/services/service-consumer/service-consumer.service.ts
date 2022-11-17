import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export class ServiceConsumer {
  public static async get<T>(data: ServiceData) {
    const { url, headers } = data
    const config: AxiosRequestConfig = { headers }
    const func = async () => await Axios.get(url, config)
    return await ServiceConsumer.consume(func, data)
  }

  private static async consume<T>(
    func: () => Promise<AxiosResponse<T>>,
    data: ServiceData
  ) {
    try {
      const initTime = new Date()
      const { data } = await func()
      const finishTime = new Date()
      console.log(
        `Tiempo de respuesta de API fue de ${
          finishTime.getTime() - initTime.getTime()
        } ms`
      )
      return data
    } catch (error) {
      throw error
    }
  }
}

export interface ServiceData {
  url: string
  headers: any
  body?: any
}
