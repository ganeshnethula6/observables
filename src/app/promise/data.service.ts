import { Injectable } from '@angular/core';

export interface Employee {
  id: number,
  firstName: string,
  lastName: string,
  street: string,
  city: string,
  mobile1: number,
  mobile2: number
}

export interface Name {
  id: number,
  firstName: string,
  lastName: string,
  addrid: number
}
export interface Address {
  addrid: number,
  street: string,
  city: string,
  phoneid: number

}
export interface Phone {
  phoneid: number,
  mobile1: number,
  mobile2: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private nameDB: Name[] = [
    { id: 1, firstName: "user1FirstName", lastName: "user1LastName", addrid: 1 },
    { id: 2, firstName: "user2FirstName", lastName: "user2LastName", addrid: 2 },
    { id: 3, firstName: "user3FirstName", lastName: "user3LastName", addrid: 3 },
    { id: 4, firstName: "user4FirstName", lastName: "user4LastName", addrid: 4 },
  ];
  private addrDB: Address[] = [
    { addrid: 1, street: "user1Street", city: "user1City", phoneid: 1 },
    { addrid: 2, street: "user2Street", city: "user2City", phoneid: 2 },
    { addrid: 3, street: "user3Street", city: "user3City", phoneid: 3 },
  ];
  private phoneDB: Phone[] = [
    { phoneid: 1, mobile1: 97000000, mobile2: 7999999 },
    { phoneid: 2, mobile1: 9700660, mobile2: 2349999 },
    { phoneid: 3, mobile1: 9700660, mobile2: 2349999 },
  ];

  constructor() { }
  getName(id: any) {
    return new Promise((resolve, reject) => {
      let res: any;
      let e = true;
      setTimeout(() => {
        this.nameDB.forEach((value, index) => {
          if (value.id === id) {
            res = this.nameDB[index];
            e = false;
          }
        });
        if (!e) {
          resolve(res);
        } else {
          reject("No Employee found matching the id:" + id);
        }
      }, 2000);
    });
  }
  getAddress(id: any) {
    return new Promise((resolve, reject) => {
      let res: any;
      let e = true;
      setTimeout(() => {
        this.addrDB.forEach((value, index) => {
          if (value.addrid === id) {
            res = this.addrDB[index];
            e = false;
          }
        });
        if (!e) {
          resolve(res);
        } else {
          reject("No Employee found matching the id:" + id);
        }
      }, 3000);
    });
  }

  getPhone(id: any) {
    return new Promise((resolve, reject) => {
      let res: any;
      let e = true;
      setTimeout(() => {
        this.phoneDB.forEach((value, index) => {
          if (value.phoneid === id) {
            res = this.phoneDB[index];
            e = false;
          }
        });
        if (!e) {
          resolve(res);
        } else {
          reject("No Employee found matching the id:" + id);
        }
      }, 2000);
    });
  }

}
