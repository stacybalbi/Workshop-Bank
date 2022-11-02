import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from 'src/app/services/accounts-service/accounts.service';
import { AccountsDto } from 'src/app/shared/models/Accounts/accounts-dto.models';
import { Location} from '@angular/common';
import { user } from 'src/app/shared/models/users.models';
import { UserService } from 'src/app/services/User-Services/user.service';

@Component({
  selector: 'app-accounts-form',
  templateUrl: './accounts-form.component.html',
  styleUrls: ['./accounts-form.component.scss']
})
export class AccountsFormComponent implements OnInit {

    users!: user[];

  public form : FormGroup = new FormGroup([]);
  constructor(
    private accountService: AccountsService, 
    private location: Location,
    private userService: UserService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getUser();
  }

  private initializeForm(): void{
    this.form = new FormGroup(
      {
        accountNumber: new FormControl(''),
        accountType:new FormControl(0),
        balance:new FormControl(0),
        userId:new FormControl(0),
        status: new FormControl(0),
      }
    )
  }
  goBack() {
    this.location.back();
  }

  submit(){
    const createAccount: AccountsDto = {
      ...this.form.value
    } as AccountsDto;

    this.accountService.create(createAccount).subscribe(()=>{
      alert('account created');
      this.goBack();
    },()=>{
      alert(' error creating account');
    }
    );
  }

  getUser(){
    this.userService.list().subscribe(datos => this.users = datos);
  }

}
