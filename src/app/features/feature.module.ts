import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FeatureRoutingModule } from "./feature-routing.module";
import { HomeComponent } from "./page/home/home.component";
import { MenuCardComponent } from "./page/menu-card/menu-card.component";

@NgModule({
    declarations: [
        HomeComponent,
        MenuCardComponent
    ],

    imports: [
        CommonModule,
        FeatureRoutingModule,
        RouterModule,
        ReactiveFormsModule
    ]
})

export class FeaturesModule {}