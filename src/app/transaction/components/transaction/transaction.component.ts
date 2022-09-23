import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transaction } from '../../models/transaction.model';
import { TransactionDetailService } from '../../services/transaction-detail.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(public service:TransactionDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    this.service.postTransactionDetail().subscribe(res=>{
      this.resetForm(form);
      this.toastr.success("Submitted Successfully");
    },
    err=>{console.log(err);}
    );
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new Transaction();
  }

}
