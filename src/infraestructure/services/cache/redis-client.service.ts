import { createClient, RedisClientOptions } from "redis";

export class RedisClient {
  private client;

  constructor(options: RedisClientOptions) {
    this.client = createClient(options);
  }

  async connect(): Promise<void> {
    await this.client.connect();
    await this.client.flushDb(); //Delete all keys
  }

  getClient() {
    return this.client;
  }
}
