import { Component, OnInit } from '@angular/core';
import { Employee } from '../observable/data.model';
import { DataService } from '../promise/data.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {
  dataService: DataService;
  employees: Employee[] = [];
  errorMsg: string | any;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit(): void {
  }

  async gatherEmployeeData(id: any) {
    try {
      let name: any = await this.dataService.getName(id);
      let addr: any = await this.dataService.getAddress(name.addrid);
      let phone: any = await this.dataService.getPhone(addr.phoneid);
      var d: Employee = {
        id: name.id,
        firstName: name.firstName,
        lastName: name.lastName,
        street: addr.street,
        city: addr.city,
        mobile1: phone.mobile1,
        mobile2: phone.mobile2,
      };
      return d;
    } catch (error: any) {
      throw new Error(error);

    }
  }

  async getEmployeeData(id: any) {
    try {
      let name: any = await this.gatherEmployeeData(id);
      this.employees.push(name)
      this.errorMsg = "";
    } catch (error) {
      this.errorMsg = error;
    }
  }
}
