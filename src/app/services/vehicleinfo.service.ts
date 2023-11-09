import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleinfoService {


  private Tripid = new BehaviorSubject<string>('');
  private Lr_Number=new BehaviorSubject<any>('');


  setData(data: string) {
    this.Tripid.next(data);
  }

  getData() {
    return this.Tripid.asObservable();
  }

  setLR(data:number|string){

    this.Lr_Number.next(data);
  }
  getLR(){

    return this.Lr_Number.asObservable();
  }



  constructor() { }
}
