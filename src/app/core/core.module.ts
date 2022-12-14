import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersFormComponent } from "../features/page/users/users-form/users-form.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UserStatePipe } from './pipes/user-state.pipe';


@NgModule({
    declarations: [
        NavbarComponent,
        UserStatePipe
    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class CoreModule {}