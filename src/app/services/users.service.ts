import { Injectable } from '@angular/core';

const users =  [{
  name: 'Address',
  value: 'test123'
},
{
  name: 'Email',
  value: 'kongqi2011@gmail.com'
}
]

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers() {
    return users;
  }
  
}
