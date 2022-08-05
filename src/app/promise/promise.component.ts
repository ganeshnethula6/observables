import { Component, OnInit } from '@angular/core';
import { DataService, Employee } from './data.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  dataServise: DataService;
  errorMsg: string | any;
  employees: any[] = [];
  constructor(dataServise: DataService) {
    this.dataServise = dataServise;
  }

  ngOnInit(): void {
  }
  gatherEmployeeData(id: any) {
    return new Promise((resolve, reject) => {
      this.dataServise.getName(id)
        .then((names: any) => {
          this.dataServise.getAddress(names.addrid)
            .then((addr: any) => {
              this.dataServise.getPhone(addr.phoneid)
                .then((phone: any) => {
                  var d: Employee = {
                    id: names.id,
                    firstName: names.firstName,
                    lastName: names.lastName,
                    street: addr.street,
                    city: addr.city,
                    mobile1: phone.mobile1,
                    mobile2: phone.mobile2,
                  };
                  resolve(d);
                })
                .catch((err) => {
                  reject(err);
                });
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  getEmployeeData(id: any) {
    this.gatherEmployeeData(id)
      .then((res) => {
        this.employees.push(res)
        this.errorMsg = "";
      })
      .catch((err) => {
        this.errorMsg = err;
      });
  }

}


