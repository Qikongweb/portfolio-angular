import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import "../../assets/js/smtp.js";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contact: UsersService, private http: HttpClient) { }

  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;

  ngOnInit() {
    this.setCurrentLocation();
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.latitude = position.coords.latitude;
        this.latitude = 49.266;
        // this.longitude = position.coords.longitude;
        this.longitude = -122.95;
        this.zoom = 10;
      });
    }
  }

  // Save contact page data
  inputData = {
    name: '',
    email: '',
    message: ''
  }
  showMsg = false;  //show alert message
  submitResult = ''; 
  statusColor = "";  //set background color

  // send method to service
  postMessages(){
    // console.log(message)
    this.http.post('https://formspree.io/xeqlbrrk', this.inputData).subscribe({
    next: data => {
      this.inputData = {
        name: '',
        email: '',
        message: ''
      }
      console.log("success")
      this.showMsg= true;
      this.submitResult = 'Thank you for you information';
      this.statusColor = "#dff0d9";
    },
    error: error => {
      console.error('There was an error!', error)
      this.submitResult = error.error.error;
      this.showMsg = true;
      this.statusColor = "#f2dedf";
    }
  })
    
}
  

}
