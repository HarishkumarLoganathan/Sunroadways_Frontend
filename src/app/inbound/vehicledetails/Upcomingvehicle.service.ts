import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { VehicleInterface } from './VehiclelistInterface';
import { UpcomingVechile } from './UpcomingVehicle_list';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';

interface SearchResult {
	IncomingVehicleList: VehicleInterface[];
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

function sort(IncomingVehicleList: VehicleInterface[], column: SortColumn, direction: string): VehicleInterface[] {
    console.log("2")
	if (direction === '' || column === '') {
        console.log("Empty")
		return IncomingVehicleList;
       
	} else {
        
		return [...IncomingVehicleList].sort((a, b) => {
			const res = compare(a[column], b[column]);
            
            
			return direction === 'asc' ? res : -res;
            
		});
	}
    
}

function matches(IncomingVehicleList: VehicleInterface, term: string, pipe: PipeTransform) {
    
	return (
		
		IncomingVehicleList.Destination.toLowerCase().includes(term.toLowerCase()) ||
		IncomingVehicleList.Door_Delivery.toLowerCase().includes(term.toLowerCase()) ||
	

		pipe.transform(IncomingVehicleList.Lr_Number).includes(term)||
        pipe.transform(IncomingVehicleList.Total_Bags).includes(term)||
		pipe.transform(IncomingVehicleList.Weight).includes(term)
	);

}

@Injectable({ providedIn: 'root' })
export class ManifestService {
	private _loading$ = new BehaviorSubject<boolean>(true);
	private _search$ = new Subject<void>();
	private _IncomingVehicleList$ = new BehaviorSubject<VehicleInterface[]>([]);
	private _total$ = new BehaviorSubject<number>(0);

	private _state: State = {
		page: 1,
		pageSize: 2,
		searchTerm: '',
		sortColumn: '',
		sortDirection: '',
	};

	constructor(private pipe: DecimalPipe) {
		this._search$
			.pipe(
				tap(() => this._loading$.next(true)),
				debounceTime(200),
				switchMap(() => this._search()),
				delay(200),
				tap(() => this._loading$.next(false)),
			)
			.subscribe((result) => {
				this._IncomingVehicleList$.next(result.IncomingVehicleList);
				this._total$.next(result.total);
                
                console.log("Harish")
			});

		this._search$.next();
	}

	get IncomingVehicleList$() {
		return this._IncomingVehicleList$.asObservable();
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
        console.log("1")
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

		// 1. sort

		console.log(searchTerm)
    
		let IncomingVehicleList = sort(UpcomingVechile, sortColumn, sortDirection);

		// 2. filter
		IncomingVehicleList = IncomingVehicleList.filter((IncomingVehicleList) => matches(IncomingVehicleList, searchTerm, this.pipe));
		const total = IncomingVehicleList.length;
		console.log(IncomingVehicleList)

		// 3. paginate
		IncomingVehicleList = IncomingVehicleList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    
        console.log(total)
		return of({ IncomingVehicleList, total });
	}
}