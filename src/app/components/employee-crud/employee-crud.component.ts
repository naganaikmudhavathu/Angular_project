import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent {

  employees = [
    { name: 'John Doe', age: 30, dept:'HR', sal:25000 },
    { name: 'Jane Smith', age: 25, dept:'Manager', sal:28000},
    // Add more employees to the array
  ];
  deleteEmployee(employee: any) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this employee?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.employees.indexOf(employee);
        if (index > -1) {
          this.employees.splice(index, 1);
          Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
        }
      }
    });
  }
  selectedEmployee: any;

  showEmployeeDetails(employee: any) {
    this.selectedEmployee = employee;
  }
  newEmployee = {
    name: '',
    age: 0,
    dept:'',
    sal: 0
  };
  
  addEmployee() {
    this.employees.push({ name: this.newEmployee.name, age: this.newEmployee.age, dept: this.newEmployee.dept, sal: this.newEmployee.sal });
    this.newEmployee.name = '';
    this.newEmployee.age = 0;
    this.newEmployee.dept= '';
    this.newEmployee.sal= 0;

    Swal.fire('Added Successfully', '', 'success');
  }

}
