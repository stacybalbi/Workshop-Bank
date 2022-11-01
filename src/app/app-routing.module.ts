import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './features/page/users/users-form/users-form.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/feature.module').then((m) => m.FeaturesModule),
  },
  {path:'create', component: UsersFormComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
