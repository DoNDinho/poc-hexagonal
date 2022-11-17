import { CacheService } from '../../../domain/services/cache/cache.service'
import { RedisClient } from './redis-client.service'

export class RedisCacheService implements CacheService {
  private client

  constructor(client: RedisClient) {
    this.client = client.getClient()
  }

  async get<T>(key: string): Promise<T> {
    try {
      const data = await this.client.get(key)
      if (data) return JSON.parse(data)
      return null
    } catch (error) {
      return null
    }
  }

  async set(key: string, value: string, options?: any): Promise<void> {
    try {
      await this.client.set(key, value, options)
    } catch (error) {}
  }
}
