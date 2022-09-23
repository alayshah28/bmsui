import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactiondetailComponent } from './components/transactiondetail/transactiondetail.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent
    },
    {
      path:'transactiondetail',
      component:TransactiondetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
