import { Component } from '@angular/core';
import { EmpCrudService } from 'src/app/services/emp-crud.service';

@Component({
  selector: 'app-emp-crud',
  templateUrl: './emp-crud.component.html',
  styleUrls: ['./emp-crud.component.css']
})
export class EmpCrudComponent {
  employees:string='';
  constructor(private empSevices:EmpCrudService){}
  ngOnInit(): void{
    this.employees;
  }
  getEmployees(){

  }
}
