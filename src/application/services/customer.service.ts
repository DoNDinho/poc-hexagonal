import { CustomerResponseDto } from "../../domain/dto/customer-response.dto";
import { Customer } from "../../domain/models/customer.model";
import { CacheService } from "../../domain/services/cache/cache.service";
import { GetCustomerByIdUseCase } from "../usecases/get-customer-by-id.usecase";
import { GetCustomerByIdService } from "./get-customer-by-id.service";

export class CustomerService implements GetCustomerByIdService {
  private getCustomerByIdUseCase: GetCustomerByIdUseCase;
  private cacheService: CacheService;

  constructor(
    getCustomerByIdUseCase: GetCustomerByIdUseCase,
    cacheService: CacheService
  ) {
    if (!getCustomerByIdUseCase)
      throw new Error("getCustomerByIdUseCase es requerido");
    this.getCustomerByIdUseCase = getCustomerByIdUseCase;
    this.cacheService = cacheService;
  }

  async getById(id: string): Promise<CustomerResponseDto> {
    const customerCache = await this.cacheService?.get<CustomerResponseDto>(id);
    if (customerCache) return customerCache;
    const customer = await this.getCustomerByIdUseCase.execute(id);
    const customerResponse = this.responseFormat(customer);
    await this.cacheService?.set(id, JSON.stringify(customerResponse));
    await this.cacheService?.expire(id, 5);

    return customerResponse;
  }

  private responseFormat(customer: Customer): CustomerResponseDto {
    const customerResponse: CustomerResponseDto = {
      customer: customer.getState(),
    };
    return customerResponse;
  }
}
