import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';


@NgModule({
  declarations: [
    AccountFormComponent,
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule
  ]
})
export class AccountModule { }
