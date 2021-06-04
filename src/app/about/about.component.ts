import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  
  content: string;

}
// personal information
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Address: ',  content: "5674 Jersey Ave."},
  { name: 'Email: ' ,  content: "kongqi2011@gmail.com"},
  { name: 'Phone Number: ', content: "604-445-8398"},
  { name: 'Linkedin: ', content: "www.linkedin.com/in/claire-qi-kong-454645174"}

];

// download file
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //ng table
  displayedColumns: string[] = ['name','content'];
  dataSource = ELEMENT_DATA;
  

  //download method
  downloadPdf() {
    const pdfUrl = '../../assets/file/QiKong_resume.pdf';
    const pdfName = 'QK_resume';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
