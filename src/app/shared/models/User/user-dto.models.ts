import { Address } from "../Address/address.models"

export interface UserDto{

      firstName :  string,
      lastName :  string,
      email :  string,
      phoneNumber :  string,
      idNumber :  string,
      birthDate :  Date,
      status :  number,
      address : Address

}