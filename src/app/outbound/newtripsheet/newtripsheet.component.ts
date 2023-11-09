import { Component } from '@angular/core';

@Component({
  selector: 'app-newtripsheet',
  templateUrl: './newtripsheet.component.html',
  styleUrls: ['./newtripsheet.component.css']
})
export class NewtripsheetComponent {

  drop_location!:string
  branch_location!:string
  branch_id!:string
  vehicle_number!:string
  driver_id!:string
  driver_name!:string
  driver_phone!:string
  Start_kms!:string


  submitData(){


    console.log("SUBMITTED")
  }


}
