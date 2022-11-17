import express, { Express } from 'express'
import { CustomerController } from './controllers/customer.controller'

export class Server {
  private app: Express

  constructor(controllers: Controllers) {
    this.app = express()
    this.app.get('/customers/:id', (req, res) => controllers.customer.getById(req, res))
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server en port ${port}`)
    })
  }
}

export interface Controllers {
  customer: CustomerController
}
