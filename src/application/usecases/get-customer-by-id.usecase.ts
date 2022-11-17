import { Customer } from '../../domain/models/customer.model'
import { CustomerRepository } from '../../domain/repositories/customer.repository'

export class GetCustomerByIdUseCase {
  private readonly customerRepository: CustomerRepository

  constructor(customerRepository: CustomerRepository) {
    if (!customerRepository) throw new Error('customerRepository es requerido')
    this.customerRepository = customerRepository
  }

  public async execute(id: string) {
    const customerDto = await this.customerRepository.getById(id)
    return new Customer(customerDto)
  }
}
