import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiResponceModel, Application, Loan } from '../../model/application.model';
import { MasterService } from '../../service/master.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent {

  EmployeeLoan: FormGroup = new FormGroup({
    bankName: new FormControl("", [Validators.required]),
    loanAmount: new FormControl("", [Validators.required]),
    emi: new FormControl("", [Validators.required])
  });

  applicationForm: FormGroup = new FormGroup({
    fullName: new FormControl("", [Validators.required]),
    dateOfBirth: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required]),
    panCard: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    state: new FormControl("", [Validators.required]),
    zipCode: new FormControl("", [Validators.required]),
    annualIncome: new FormControl("", [Validators.required]),
    employeeStatus: new FormControl("", [Validators.required]),
    creditScore: new FormControl("", [Validators.required]),
    message: new FormControl("" ,[Validators.required])
  });

  application: Application = new Application();
  loan: Loan = new Loan();

  masterSrv = inject(MasterService);

  addLoan() {
    debugger
    const strObj = JSON.stringify(this.loan);
    const newObj = JSON.parse(strObj);
    this.application.Loans.unshift(newObj);
  }

  onSubmit() {
    if (this.applicationForm.invalid) {
      this.applicationForm.markAllAsTouched();
      return;
    }
    
    this.masterSrv.addNewApplication(this.application).subscribe((Result: ApiResponceModel) => {
      if (Result.result) {
        alert("Loan Application Success");
      } else {
        alert(Result.message);
      }
    }, error => {
      alert(error);
    });
  }
}
