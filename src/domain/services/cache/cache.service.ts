export interface CacheService {
  get<T>(key: string): Promise<T>;
  set(key: string, value: string, options?: any): Promise<void>;
  expire(key: string, seconds: number): Promise<void>;
}
