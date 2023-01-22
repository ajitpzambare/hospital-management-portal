import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent {
  ELEMENT_DATA: patient[] = [
    {name: 'Jennifer Reyes', contactno: 8600792810},
    {name: 'Bruce Franco',  contactno: 9600792811},
    {name: 'Joshua Munoz',  contactno: 7600792810},
    {name: 'Alicia Green',  contactno: 8600792810},
    {name: 'Joseph Martinez',  contactno: 8600792810},
    {name: 'Coronis Walsh',  contactno: 8600792810},
    {name: 'Belinda Olsen', contactno: 8600792810},
  ];
  displayedColumns: string[] = [ 'name', 'contactno'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface patient {
  name: string;
  contactno: number;
}
