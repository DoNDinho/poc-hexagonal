import { Request, Response } from 'express'
import { GetCustomerByIdService } from '../../../application/services/get-customer-by-id.service'
import { CustomerResponseDto } from '../../../domain/dto/customer-response.dto'

export class CustomerController {
  private readonly getCustomerByIdService: GetCustomerByIdService

  constructor(getCustomerByIdService: GetCustomerByIdService) {
    if (!getCustomerByIdService) throw new Error('getCustomerByIdService es requerido')
    this.getCustomerByIdService = getCustomerByIdService
  }

  async getById(req: Request, res: Response): Promise<Response<CustomerResponseDto>> {
    const customerResponse = await this.getCustomerByIdService.getById(req.params.id)
    return res.json(customerResponse)
  }
}
