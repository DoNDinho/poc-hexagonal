import { CustomerResponseDto } from '../../domain/dto/customer-response.dto'

export interface GetCustomerByIdService {
  getById(id: string): Promise<CustomerResponseDto>
}
