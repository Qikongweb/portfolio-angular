import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  
  content: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Address: ',  content: "207-4275 Grange St."},
  { name: 'Email: ' ,  content: "kongqi2011@gmail.com"},
  { name: 'Phone Number: ', content: "902-414-1875"}

];
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['name','content'];
  dataSource = ELEMENT_DATA;
  

}
