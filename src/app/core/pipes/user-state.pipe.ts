import { Pipe, PipeTransform } from '@angular/core';
import { userStatus } from '../enums/users.enum';

@Pipe({
  name: 'userStatus'
})
export class UserStatePipe implements PipeTransform {

  public transform(value: userStatus, ok:boolean){
    return userStatus[value];
  }

}
