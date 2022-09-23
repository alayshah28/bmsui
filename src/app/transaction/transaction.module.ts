import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactiondetailComponent } from './components/transactiondetail/transactiondetail.component';

@NgModule({
  declarations: [
    TransactionComponent,
    TransactiondetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
