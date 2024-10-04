import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponceModel, Application } from '../../model/application.model';
import { Loan } from '../../model/application.model';
import { MasterService } from '../../service/master.service';
import { error } from 'console';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {

  application : Application = new Application(); // import all the data as we write in model/application.model.ts  // we can bind that data
  loan : Loan = new Loan(); // import all the data as we write in model/application.model.ts 

  addLoan(){
    debugger
    const strObj = JSON.stringify(this.loan); //we are converting our string object  to json 
    const newObj = JSON.parse(strObj);
    this.application.Loans.unshift(newObj); // to push input data to loan array and we are going to show that data on html
  }
  


  masterSrv = inject(MasterService); // this is new way to injection 


  // push data to api
  //this is std way to write a apin button call
  onSubmit(){
    debugger
    this.masterSrv.addNewApplication(this.application).subscribe((Result : ApiResponceModel) =>{
      if (Result.result) {
        alert("Loan Application Success");
      }
      else{
        alert(Result.message);
      }
    }, error=> {
      alert(error)

    })
  }
}
