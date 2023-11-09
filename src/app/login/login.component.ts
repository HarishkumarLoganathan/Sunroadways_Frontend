import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  branch_email!:string
  branch_password!:string
  response_data!:any
  login_detail!:any

constructor(private http:HttpClient){


}

  login(login:any){
    

    console.log(login.value)
    const jsonData = JSON.stringify(login.value);
    console.log(jsonData)
    this.http.post('http://127.0.0.1:8000/BranchLogin/BranchLogin/', jsonData)
    .subscribe(
      response => {
        console.log('Login success:', response);


        this.response_data=response;
        this.login_detail= JSON.stringify(response);



        const data=JSON.parse(this.login_detail)
        console.log(data)
        console.log(data.Branch_Id)
        console.log(data.Branch_Name)
       
       


        login.resetForm();

        localStorage.setItem('branch_name', data.Branch_Name);
        localStorage.setItem('branch_id',data.Branch_Id);

     
       
        // Handle the successful response
      },
      error => {
        console.error('Login error:', error);
        // Handle the error response
      }
    );


  }

}
