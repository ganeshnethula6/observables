import { Component, OnInit } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Address, DataModel, Employee, Name, Phone } from './data.model';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  dataModal: DataModel | any;
  nameDetails$: any;
  nameDet: Name | any;
  Address$: any;
  address: Address | any;
  Phone$: any;
  phone: Phone | any;
  employees: Employee[] = [];
  errorMsg: string | any;

  constructor(dataModal: DataModel) {
    this.dataModal = dataModal;
  }

  ngOnInit(): void {
  }
  gatherEmployeeData(id: number): Observable<Employee> {
    return new Observable((subscribe) => {
      let data: Employee | any;
      this.nameDetails$ = this.dataModal?.getName(id).subscribe((observable: any) => {
        this.nameDet = observable;
        this.Address$ = this.dataModal?.getAddress(this.nameDet.addrid).subscribe((observable: any) => {
          this.address = observable;
          this.Phone$ = this.dataModal?.getPhone(this.address.phoneid).subscribe((observable: any) => {
            this.phone = observable;
            data = {
              id: this.nameDet?.id,
              firstName: this.nameDet?.firstName,
              lastName: this.nameDet?.lastName,
              street: this.address?.street,
              city: this.address?.city,
              mobile1: this.phone?.mobile1,
              mobile2: this.phone?.mobile2,
            }
            subscribe.next(data);
          }, (error: any) => {
            this.errorMsg = error;
            console.log(error);
          })
        }, (error: any) => {
          this.errorMsg = error;
          console.log(error);
        })
      }, (error: any) => {
        this.errorMsg = error;
        console.log(error);
      });
    });
  }

  getEmployeeData(id: number): void {
    this.gatherEmployeeData(id).subscribe((observable) => {
      this.employees.push(observable);
      this.errorMsg = "";
    })
  }
}