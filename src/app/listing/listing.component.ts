import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();

  }

  private getEmployees()
  {
    this.employeeService.getEmployeeList().subscribe(data=> {
      this.employees=data; 
    })
  }

}
