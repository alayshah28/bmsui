import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
@Injectable({
  providedIn: 'root'
})
export class TransactionDetailService {

  constructor(private http:HttpClient) { }
  formData:Transaction=new Transaction();
  list!:Transaction[];
  baseUrl='http://localhost:5000/api/Transaction';
  postTransactionDetail()
  {
    return this.http.post(this.baseUrl+'/'+this.formData.transactionType+'Money?amount='+
    this.formData.transactionAmount+'&accountno='+this.formData.accountNo,this.formData);
  }
  refreshList(){
    
    this.http.get(this.baseUrl+'/GetAllTransactions').toPromise().then(response =>this.list=response as Transaction[])
  }
}
