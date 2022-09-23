import { Component, OnInit } from '@angular/core';
import { AccountdetailsService } from '../../services/accountdetails.service';
import { FormsModule,NgForm,ReactiveFormsModule } from '@angular/forms';
import { Accountmodel } from '../../models/accountmodel.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {

  constructor(public service:AccountdetailsService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    this.service.postAccountDetail().subscribe(res=>{
      this.resetForm(form);
      this.toastr.success("Submitted Successfully");
    },
    err=>{console.log(err);}
    );
  }
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new Accountmodel();
  }
}
