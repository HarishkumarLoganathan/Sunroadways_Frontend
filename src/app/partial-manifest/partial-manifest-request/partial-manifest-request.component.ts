
import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren,PipeTransform } from '@angular/core';
import { DecimalPipe, NgFor,AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

interface Country {
	id: number;
	name: string;
	flag: string;
	area: number;
	population: number;
}



const COUNTRIES: Country[] = [
	{
		id: 1,
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		id: 2,
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		id: 3,
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		id: 4,
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

export interface SortEvent {
	column: SortColumn;
	direction: SortDirection;
}

@Directive({
	selector: 'th[sortable]',
	standalone: true,
	host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()',
	},
})
export class NgbdSortableHeader {
	@Input() sortable: SortColumn = '';
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<SortEvent>();

	rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.sortable, direction: this.direction });
	}
}

function search(text: string, pipe: PipeTransform): Country[] {
	return COUNTRIES.filter((country) => {
		const term = text.toLowerCase();
		return (
			country.name.toLowerCase().includes(term) ||
			pipe.transform(country.area).includes(term) ||
			pipe.transform(country.population).includes(term)
		);
	});
}


@Component({
  selector: 'app-partial-manifest-request',
  standalone:true,
  imports: [NgFor, NgbdSortableHeader,NgbModule,CommonModule],
  providers:[DecimalPipe],
  templateUrl: './partial-manifest-request.component.html',
  styleUrls: ['./partial-manifest-request.component.css'],
  


})







export class PartialManifestRequestComponent  {

  countries = COUNTRIES;


  countries$: Observable<Country[]>;
filter = new FormControl('', { nonNullable: true });

	constructor(pipe: DecimalPipe) {
		this.countries$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text, pipe)),
		);
	}

	@ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
      console.log(header)
      console.log("SORTINGSORTING")
      
			if (header.sortable !== column) {
				header.direction = '';
			} 
		});

		// sorting countries
		if (direction === '' || column === '') {
			this.countries = COUNTRIES;
		} else {
			this.countries = [...COUNTRIES].sort((a, b) => {
				const res = compare(a[column], b[column]);
        console.log(res)
				return direction === 'asc' ? res : -res;
        
			});
		}
	}

}




