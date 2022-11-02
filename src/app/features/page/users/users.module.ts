import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersListComponent,
    UsersFormComponent,
    UsersDetailsComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class UsersModule { }