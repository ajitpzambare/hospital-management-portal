import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-doctors-list-view',
  templateUrl: './doctors-list-view.component.html',
  styleUrls: ['./doctors-list-view.component.scss']
})


export class DoctorsListViewComponent {
   ELEMENT_DATA: Doctor[] = [
    {name: 'Ajit Zambare', designation: 'MBBS', contactno: 8600792810},
    {name: 'Raginbert Daalmans', designation: 'MD', contactno: 9600792811},
    {name: 'Cathalán Bonner', designation: 'BAMS', contactno: 7600792810},
    {name: 'Boutros Landolfi', designation: 'Epidemiologist', contactno: 8600792810},
    {name: 'Roghayeh Marković', designation: 'Podiatrist', contactno: 8600792810},
    {name: 'Coronis Walsh', designation: 'Dentist', contactno: 8600792810},
    {name: 'Ibragim McGregor', designation: 'Dentist', contactno: 8600792810},
  ];
  displayedColumns: string[] = [ 'name', 'designation', 'contactno'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface Doctor {
  name: string;
  designation: string;
  contactno: number;
}
