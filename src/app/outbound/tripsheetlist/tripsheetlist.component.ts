import { Component,PipeTransform } from '@angular/core';
import { AsyncPipe, DecimalPipe, NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule,FormsModule } from '@angular/forms';

import { Observable,BehaviorSubject,combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgbTypeaheadModule,NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';


interface TriplistInterface {
 

  Trip_Id:string;
  Route_Name :string;
  Route_Id:string
  Driver_Name:string;
  Vehicle_Number:string;
  Driver_Id :string;
  Vehicle_Model :string;
  Last_Scan_Status :string;
  Driver_Contact : string;
  Vehicle_Start :string
}
const TRIPLIST: TriplistInterface[] = [


  {
    Trip_Id:"1683028193",
    Route_Name :"Chennai_Van-Chennai_Bom",
    Route_Id:"CNVAN01-BLRBOM02",
    Driver_Name:"Shanmugam",
    Vehicle_Number:"TN05BT9501",
    Driver_Id :"DS24",
    Vehicle_Model :"TATA 20 Feete4332",
    Last_Scan_Status :"Yet to Complete Loading",
    Driver_Contact : "7092886939",
    Vehicle_Start :"12716"
  },
  {
    Trip_Id:"1788728156",
    Route_Name :"Chennai_Van-Chennai_Cham",
    Route_Id:"CNVAN01-BLRCHAM01",
    Driver_Name:"Sunder",
    Vehicle_Number:"TN13Q9722",
    Driver_Id :"DS32",
    Vehicle_Model :"BOSS 20 Feete4332",
    Last_Scan_Status :"TRIP CREATED",
    Driver_Contact : "9380158318",
    Vehicle_Start :"18256"
  },
  {
    Trip_Id:"1780928124",
    Route_Name :"Chennai_Van-Chennai_Peen",
    Route_Id:"CNVAN01-BLRPEEN02",
    Driver_Name:"Selvam",
    Vehicle_Number:"TN20BT0842",
    Driver_Id :"DS28",
    Vehicle_Model :"Eicher 20 Feete4332",
    Last_Scan_Status :"DEPATURED",
    Driver_Contact : "8667411084",
    Vehicle_Start :"28275"
  },
  
    ]

function search(text: string, pipe: PipeTransform): TriplistInterface[] {
	return TRIPLIST.filter((triplist) => {
		const term = text.toLowerCase();
		return (
			
      triplist.Trip_Id.toLowerCase().includes(term) ||
      triplist.Route_Name.toLowerCase().includes(term) ||
      triplist.Route_Id.toLowerCase().includes(term) ||
      triplist.Driver_Name.toLowerCase().includes(term) ||
      triplist.Vehicle_Number.toLowerCase().includes(term) ||
      triplist.Driver_Id.toLowerCase().includes(term) ||
      triplist.Vehicle_Model.toLowerCase().includes(term) ||
      triplist.Last_Scan_Status.toLowerCase().includes(term) ||
      triplist.Driver_Contact.toLowerCase().includes(term) ||
      triplist.Vehicle_Start.toLowerCase().includes(term) 
			
		);
	});
}



@Component({
  selector: 'app-tripsheetlist',
  standalone: true,
  templateUrl: './tripsheetlist.component.html',
  imports: [DecimalPipe, NgFor, AsyncPipe, ReactiveFormsModule, NgbTypeaheadModule,NgbPaginationModule,FormsModule],
  providers: [
    DecimalPipe ],
  styleUrls: ['./tripsheetlist.component.css']
})
export class TripsheetlistComponent {

  page = 1;
	pageSize = 2;
	collectionSize = TRIPLIST.length;
	triplist1!: TriplistInterface[];
  triplist$: Observable<TriplistInterface[]>;
  slicedData$!:Observable<TriplistInterface[]>;
	filter = new FormControl('', { nonNullable: true });
  private searchText$ = new BehaviorSubject<string>('');
  private page$ = new BehaviorSubject<number>(1);
  private pageSize$ = new BehaviorSubject<number>(2);


	constructor(pipe: DecimalPipe) {
    
   
    this.triplist$ = combineLatest([this.searchText$, this.page$, this.pageSize$]).pipe(
      map(([searchText, page, pageSize]) => {
        return search(searchText, pipe).slice((page - 1) * pageSize, page * pageSize);
      })
    );

    this.triplist$.subscribe((data) => {
      console.log('Array length:', data.length);
    });
    
    this.filter.valueChanges.subscribe((value) => {
      this.onSearchInputChange(value);
    });
    
  }

    onSearchInputChange(searchText: string) {
      this.searchText$.next(searchText);
    }
  
    onPageChange(page: number) {
      this.page$.next(page);
    }
  
    onPageSizeChange(pageSize: number) {
      this.pageSize$.next(pageSize);
    }
}
