import { Address } from "./Address/address.models"

export interface user {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber:string,
    idNumber: string,
    birthDate: Date,
    address : Address,
      status: number
      createdAt: string
      updatedAt: string
    }
