import { CustomerDto } from '../dto/customer.dto'

export interface CustomerRepository {
  getById(id: string): Promise<CustomerDto>
}
