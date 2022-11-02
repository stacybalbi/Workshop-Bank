import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CreateUserDto } from 'src/app/shared/models/User/create-user-dto.models';
import { UserService } from 'src/app/services/User-Services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  dataform = new FormGroup(
    {
      firstname : new FormControl(''),
      lastname : new FormControl(''),
      email : new FormControl(''),
      phonenumber : new FormControl(''),
      idnumber : new FormControl(''),
      birthday : new FormControl(''),
      status : new FormControl(''),
      street : new FormControl(''),
      number : new FormControl(''),
      city : new FormControl(''),
      state : new FormControl(''),
      zip : new FormControl('')
      
    }
  ) 

submit(){
  const createUser: CreateUserDto = { 
  ...this.dataform.value } as CreateUserDto;

    this.userService.create(createUser)

}

  ngOnInit(): void {
  }

}
