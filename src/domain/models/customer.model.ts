import { CustomerDto } from '../dto/customer.dto'

export class Customer {
  private name: string
  private height: string
  private mass: string
  private eye_color: string
  private birth_year: string

  constructor(customer: CustomerDto) {
    this.name = customer.name
    this.height = customer.height
    this.mass = customer.mass
    this.eye_color = customer.eye_color
    this.birth_year = customer.birth_year
  }

  public getState(): CustomerDto {
    const { name, height, mass, eye_color, birth_year } = this
    const state: CustomerDto = { name, height, mass, eye_color, birth_year }
    return state
  }
}
