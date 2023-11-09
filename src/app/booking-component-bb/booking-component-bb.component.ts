import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormArray, FormControl,FormsModule,Validators,AbstractControl } from '@angular/forms';
import { end } from '@popperjs/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-component-bb',
  standalone:true,
  templateUrl: './booking-component-bb.component.html',
  styleUrls: ['./booking-component-bb.component.css'],
  imports:[ReactiveFormsModule,CommonModule,NgbModule,FormsModule]
})
export class BookingComponentBBComponent {
 order_id!:string|null
 client_id!:string
 total_consignment!:number
  pickup_location!:any
  pickup_branch!:string
  delivery_location!:string
  delivery_branch!:string
  delivery_type!:string
  article_count!:number
  consignment_weight!:number
  consignee_name!:string
  consignee_gst!:string
  consignee_email!:string
  delivery_address!:string
  delivery_area!:string
  delivery_pincode!:number
  delivery_contact!:number
  invoice_number!:string
  ewaybill_number!:string
  name!:any
  consignmentsArray!:any
  paymentflag=""
  
  
  loc=["Chennai","Coimbatore","Bangalore"]
  loc_branch={"Chennai":["Ambattur","Vanagaram","Walltax Road"],"Bangalore":["Bommasandra","Chamarajpet","Peenya"],"Coimbatore":["Saravanmpatti"]
  
  }
  
  
  
  
  
  
  
  
      studentForm: FormGroup;
      
      currentPage=1
      pageSize=1
      list!:any
      startIndex!:number
      endIndex!:any
  array=["SURESH","RAMESH","DINESH"]
      constructor(private fb: FormBuilder,private http:HttpClient,private router:Router,private route:ActivatedRoute) {
      

        this.route.paramMap.subscribe(params => {
          
          this.order_id = params?.get('order_id');

          
          const apiUrl = `http://127.0.0.1:8000/BlindManifest/OrderBooking/?order_id=${this.order_id}`;
          this.http.get(apiUrl)
.subscribe(
  (response:any) => {
    console.log('Login success:', response);

    this.client_id=response[0].Client_Id
    this.total_consignment=response[0].Total_Consignment
    console.log("http")
    
    

this.initializeForm()
    





   
   

    // Handle the successful response
  },
  error => {
   
    console.error('Login error:', error.value);
    this.router.navigate(['/blindmanifest']);



    // Handle the error response
  }
);
        
          
        });


console.log('Form')
this.consignmentsArray = Array(this.total_consignment).fill(0); 
console.log(this.total_consignment)
this.studentForm = this.fb.group({
  studentList: this.fb.array([])
});
  
      
      }
  
      initializeForm() {
        console.log('Form');
        this.consignmentsArray = Array(this.total_consignment).fill(0);
        console.log(this.total_consignment);
        this.studentForm = this.fb.group({
          studentList: this.fb.array(this.consignmentsArray.map(() => this.getStudentFields()))
        });
      }
  numberregex(control: AbstractControl)
  {
  
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!pattern.test(control.value)) {
      return { invalidnumber: true };
    }
    return null;
  
  }
  
      getStudentFields(): FormGroup {
        return this.fb.group({
        client_id: new FormControl(this.client_id),
        order_id:new FormControl(this.order_id),
       
          drop_location:['',Validators.required],
          delivery_branch:['',Validators.required],
          article_count:['',[Validators.required,Validators.pattern('^[1-9][0-9]*$')]],
          consignment_weight:['',[Validators.required,Validators.pattern('^[1-9][0-9]*$')]],
          delivery_type:['',Validators.required],
          consignee_name:['',Validators.required],
          consignee_GST:['',[Validators.required,Validators.pattern('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$')]],
          consignee_email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
          delivery_address:['',Validators.required],
          delivery_area:['',Validators.required],
          delivery_pincode:['',[Validators.required,Validators.pattern('^[1-9][0-9]{5}$')]],
          delivery_contact:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
          payment_type: new FormControl(),
          payment_by:new FormControl(),
         
  
          
          
  
          
          studentSubjects: this.fb.group({
            studentSubjectArray: this.fb.array([this.putNewInvoice()]),
          }),
  
        });
      }
      putNewInvoice() {
        return new FormGroup({
          ewaybill_number: new FormControl(""),
          invoice_number: new FormControl(""),
        });
      }
  
      get studentListArray() {
  
       
        return this.studentForm.get('studentList') as FormArray;
  
      }
      get currentPageForms() {
        this.startIndex = this.currentPage * this.pageSize -1;// 0*1 =0
        this.endIndex = this.startIndex + this.pageSize;//1
        
  
       
  
        
        return (this.studentListArray.controls.slice(this.startIndex, this.endIndex));
      }
      getControlValue(currentPage: number,controlName: string) {
        const control = this.studentForm.get(['studentList', currentPage, controlName]);;
       
        return control ? control.value : null;
      }
  
      getControl(currentPage: number,controlName: string) {
        const control = this.studentForm.get(['studentList', currentPage, controlName]);;
      
        return control;
      }
   
     
  
  
 
  
  
      subjectsFormGroup(i: number) {
        return this.studentListArray.at(i).get("studentSubjects") as FormGroup;
      }
    
      subjectsArray(i: number) {
        return this.subjectsFormGroup(i).get("studentSubjectArray") as FormArray;
      }
    
      addNewSubject(i: number) {
        this.subjectsArray(i).push(this.putNewInvoice());
      }
    
      removeNewSubject(i: number, j: number) {
        this.subjectsArray(i).removeAt(j);
      }
  
      getFormData(studentForm:any) {
       
       
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
  
        const formData = studentForm.value;
    
        // Add the 'client_id' property to the form data object
       // const client_id = localStorage.getItem('usr_id');
        //formData.client_id = "BEERAEE225";
      
        // Convert the updated object to JSON
        const jsonData = JSON.stringify(formData);
        console.log(jsonData)
        
  
        this.http.post('http://127.0.0.1:8000/PartialManifest/PartialManifestBooking/', jsonData,httpOptions)
        .subscribe(
          response => {
    
            console.log(response)
          
          },
          error => {
        
            console.error('Login error:', error);
    
    
            // Handle the error response
          }
        );
  
      }




payment_flag(paymenttype:any,index:any)
{
  console.log(paymenttype)
if (paymenttype=="MONTHLY BILLING")
{

  this.paymentflag="M"
  console.log(index)
  console.log(this.paymentflag);


  
  const studentListArray = this.studentForm.get('studentList') as FormArray;

  // Access the form group at a specific index (e.g., 0 for the first item in the array)
  const formGroupAtIndex = studentListArray.at(index) as FormGroup;
  
  // Add a new control (e.g., 'charge_by') to the form group
  formGroupAtIndex.addControl('charge_by', new FormControl(''));
  console.log('Form Group Value:', this.studentForm.value);

// charge_type:new FormControl(),

 // const dynamicControl = this.getStudentFields('Y'); // You can use 'Y' or 'N' as the flag
//(this.studentForm.get('studentList') as FormArray).push(dynamicControl);
}


}

fetch_billinginfo(billing:any)
{

console.log(billing)
}

}
