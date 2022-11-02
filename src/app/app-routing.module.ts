import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsFormComponent } from './features/page/accounts/accounts-form/accounts-form.component';
import { CardsFormComponent } from './features/page/cards/cards-form/cards-form.component';
import { UsersFormComponent } from './features/page/users/users-form/users-form.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/feature.module').then((m) => m.FeaturesModule),
  },
  {path:'create-user', component: UsersFormComponent},
  {path:'create-creditcard', component: CardsFormComponent},
  {path:'create-account', component: AccountsFormComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
