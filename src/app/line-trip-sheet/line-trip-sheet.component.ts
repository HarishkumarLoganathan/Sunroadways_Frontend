import { Component } from '@angular/core';


export interface TableRow {

  Lr_Number: string;
  Consignor_Name: string;
  Consignee_Name:string;
  Delivery_Place:string;
  Delivery_Pincode:string;
  Total_Bags:string
  Total_Weight:string
  Delivery_Contact: string;
  // Other properties
}

@Component({
  selector: 'app-line-trip-sheet',
  templateUrl: './line-trip-sheet.component.html',
  styleUrls: ['./line-trip-sheet.component.css']
})



export class LineTripSheetComponent {

  


  tableRows: TableRow[] = [ { Lr_Number:'', Consignor_Name:'', Consignee_Name:'',Delivery_Place:'',Delivery_Pincode:'',Total_Bags:'',Total_Weight:'' ,Delivery_Contact:''}];

  addRow() {
    const newRow: TableRow = { Lr_Number: '', Consignor_Name:'', Consignee_Name:'',Delivery_Place:'',Delivery_Pincode:'',Total_Bags:'',Total_Weight:'',Delivery_Contact:'' }; // Initialize with default values or empty strings
    this.tableRows.push(newRow);

  }


  submitData() {
    const groupedData = this.groupData(this.tableRows);
    console.log(groupedData)
  }
  removeRow(index: number) {
    this.tableRows.splice(index, 1);
  }
  private groupData(data: TableRow[]): any {
    // Perform grouping logic and return the grouped data
    // For example, you can group by age and create an object with age as the key and an array of names as the value
    const groupedData: { [key: string]: string[] } = {};

    data.forEach(row => { 
      if (!groupedData[row.Lr_Number]) {
        groupedData[row.Lr_Number] = [];
      }
      groupedData[row.Lr_Number].push(row.Consignor_Name)
      groupedData[row.Lr_Number].push(row.Consignor_Name)
      groupedData[row.Lr_Number].push(row.Consignee_Name)
      groupedData[row.Lr_Number].push(row.Delivery_Place)
      groupedData[row.Lr_Number].push(row.Delivery_Pincode)
      groupedData[row.Lr_Number].push(row.Total_Bags)
      groupedData[row.Lr_Number].push(row.Total_Weight)
      groupedData[row.Lr_Number].push(row.Delivery_Contact)
      
    });
 console.log(groupedData)
    return groupedData;
  }
}
