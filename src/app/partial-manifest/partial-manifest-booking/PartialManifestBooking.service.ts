import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { ManifestBookingList } from './PartialManifestList';

import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

interface SearchResult {
	Bookings: ManifestBookingList[];
	total: number;
}

interface State {
	page: number;
	pageSize: number;
	searchTerm: string;
	sortColumn: SortColumn;
	sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(Bookings: ManifestBookingList[], column: SortColumn, direction: string): ManifestBookingList[] {
    console.log("2")
	if (direction === '' || column === '') {
        console.log("Empty")
		return Bookings;
       
	} else {
        
		return [...Bookings].sort((a, b) => {
			const res = compare(a[column], b[column]);
            
            
			return direction === 'asc' ? res : -res;
            
		});
	}
    
}

function matches(Bookings: ManifestBookingList, term: string, pipe: PipeTransform) {
    
	return (
		Bookings.Consignee_name.toLowerCase().includes(term.toLowerCase()) ||
        pipe.transform(Bookings.LR_Number).includes(term)||
		
        pipe.transform(Bookings.Weight).includes(term)||
        pipe.transform(Bookings.Contact).includes(term)||
		pipe.transform(Bookings.Order_Ref_Id).includes(term)||
		pipe.transform(Bookings.Article).includes(term)||
		pipe.transform(Bookings.DeliveryCity).includes(term)||
		pipe.transform(Bookings.DeliveryPincode).includes(term)
		
	);

}

@Injectable({ providedIn: 'root' })
export class ManifestService {
	private _loading$ = new BehaviorSubject<boolean>(true);
	private _search$ = new Subject<void>();
	private _Bookings$ = new BehaviorSubject<ManifestBookingList[]>([]);
	private _total$ = new BehaviorSubject<number>(0);
	ManifestBooking:any

	private _state: State = {
		page: 1,
		pageSize: 4,
		searchTerm: '',
		sortColumn: '',
		sortDirection: '',
	};

	constructor(private pipe: DecimalPipe, private http:HttpClient) {
		this._search$
			.pipe(
				tap(() => this._loading$.next(true)),
				debounceTime(200),
				switchMap(() => this._search()),
				delay(200),
				tap(() => this._loading$.next(false)),
			)
			.subscribe((result) => {
				this._Bookings$.next(result.Bookings);
				this._total$.next(result.total);
                
                console.log("Harish")
			});

		this._search$.next();
	}

	get Bookings$() {
		return this._Bookings$.asObservable();
	}
	get total$() {
		return this._total$.asObservable();
	}
	get loading$() {
		return this._loading$.asObservable();
	}
	get page() {
		return this._state.page;
	}
	get pageSize() {
		return this._state.pageSize;
	}
	get searchTerm() {
		return this._state.searchTerm;
	}

	set page(page: number) {
		this._set({ page });
	}
	set pageSize(pageSize: number) {
		this._set({ pageSize });
	}
	set searchTerm(searchTerm: string) {
		this._set({ searchTerm });
	}
	set sortColumn(sortColumn: SortColumn) {
        console.log("LIGESAN")
		this._set({ sortColumn });
	}
	set sortDirection(sortDirection: SortDirection) {
		this._set({ sortDirection });
	}

	private _set(patch: Partial<State>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}


	private _search(): Observable<SearchResult> {
		// Fetch the data
		const branch_id = localStorage.getItem('branch_id');
		const apiUrl = `http://127.0.0.1:8000/PartialManifest/PartialManifestList/?branch_id=${branch_id}`;
	  
		return this.http.get(apiUrl).pipe(
		  switchMap((data: any) => {
			// Transform the data
			const transformedData = data.map((item: any, index: number) => ({
			  id: index + 1,
			  LR_Number: item.Lr_Number,
			  Order_Ref_Id: item.Client_Id__Client_Name,
			  Consignee_name: item.Consignee_Name,
			  Consignor_name: item.Client_Id__Client_Name,
			  DeliveryCity: item.Delivery_City,
			  DeliveryArea: item.Consignee_Delivery_Area,
			  DeliveryPincode: item.Consignee_Delivery_Pincode,
			  Article: item.Total_Article,
			  Weight: item.Total_Consignment_Weight,
			  Contact: item.Consignee_Delivery_Contact,
			  Pickup_status: item.Pickup_Status
			}));
	  
			// Store the transformed data in a property
			this.ManifestBooking = transformedData;
	  
			// Continue with data processing
			const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
	  
			// 1. Sort
			let Bookings = sort(this.ManifestBooking, sortColumn, sortDirection);
	  
			// 2. Filter
			Bookings = Bookings.filter((booking) => matches(booking, searchTerm, this.pipe));
			const total = Bookings.length;
	  
			// 3. Paginate
			Bookings = Bookings.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
	  
			return of({ Bookings, total });
		  }),
		  catchError((error) => {
			console.error('Error:', error);
			return of({ Bookings: [], total: 0 });
		  })
		);
	  }
	  



}