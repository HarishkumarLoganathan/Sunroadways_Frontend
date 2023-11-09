import { Component } from '@angular/core';
import {HttpClient,HTTP_INTERCEPTORS,HttpHeaders, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-branchsignup',
  templateUrl: './branchsignup.component.html',
  styleUrls: ['./branchsignup.component.css']
})
export class BranchsignupComponent {


  branch_name!: string;
  branch_address!: string;
  branch_city!: string;
  branch_state!: string;
  branch_email!: string;
  branch_password!: string;
  branch_id!: string;

  constructor(private http:HttpClient,)
  {


  }


  branch_login(branchform: any) {

    const jsonData = JSON.stringify(branchform.value);
    console.log(jsonData)
    this.http.post('http://127.0.0.1:8000/BranchLogin/BranchSignup/', jsonData)
    .subscribe(
      response => {
        console.log('Login success:', response);

        branchform.resetForm();
       
      
        // Handle the successful response
      },
      error => {
      
        console.error('Login error:', error.value);


        // Handle the error response
      }
    );


  }

}
