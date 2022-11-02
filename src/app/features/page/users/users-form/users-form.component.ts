import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  UserDto } from 'src/app/shared/models/User/user-dto.models';
import { UserService } from 'src/app/services/User-Services/user.service';
import {user} from 'src/app/shared/models/users.models';
import { Location} from '@angular/common';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  public dataform : FormGroup = new FormGroup([]);
  constructor(private userService: UserService, private location: Location) { }

 private initializeForm(): void {
  this.dataform = new FormGroup(
    {
      firstName : new FormControl(''),      
      lastName : new FormControl(''),
      email : new FormControl(''),
      phoneNumber : new FormControl(''),
      idNumber : new FormControl(''),
      birthDate : new FormControl(new Date(), [Validators.required]),
      address: new FormGroup({
        street : new FormControl(''),
        number : new FormControl(''),
        city : new FormControl(''),
        state : new FormControl(''),
        zip : new FormControl('')
      }),

        status : new FormControl('')
    }
  ) }

  goBack() {
    this.location.back();
  }
submit(){
  const createUser: UserDto = {
  ...this.dataform.value
  } as UserDto;

    this.userService.create(createUser).subscribe(()=>{
      alert('user created');
      this.goBack();
    },()=>{
      alert('error creating user');
    }
    );
}

  ngOnInit(): void {
    this.initializeForm();
  }

}
