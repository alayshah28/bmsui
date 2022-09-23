import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountFormComponent } from './components/account-form/account-form.component';


const routes: Routes = [
  {
  path: '',
  component: AccountDetailsComponent
  },
  {
    path: 'accountform',
    component: AccountFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
