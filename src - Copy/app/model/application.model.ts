// we got this data from api in json format we conveted that data into typescript

import { Interface } from "readline"

export class Application {
  applicantID: number
  fullName: string
  applicationStatus: string
  panCard: string
  dateOfBirth: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  annualIncome: number
  employmentStatus: string
  creditScore: number
  assets: string
  dateApplied: Date
  Loans: Loan[]  // below there is a loan class 

  // we have to initilise all the above data
  constructor(){
    this.applicantID = 0;
    this.fullName = '';
    this.applicationStatus = '';
    this.panCard = '';
    this.dateOfBirth = '';
    this.email = '';
    this.phone = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zipCode = '';
    this.annualIncome = 0;
    this.employmentStatus = '';
    this.creditScore = 0;
    this.assets = '';
    this.dateApplied = new Date();
    this.Loans = [];
  }
}

export class Loan {
    loanID: number;
    applicantID: number;
    bankName: string;
    loanAmount: number;
    emi: number;
  
    constructor() {
      this.loanID = 0;
      this.applicantID = 0;
      this.bankName = "";
      this.loanAmount = 0;
      this.emi = 0;
    }
  }

export interface ApiResponceModel{
  message : string,
  result : boolean,
  data : any
}
