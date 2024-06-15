import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { ColDef, GridOptions } from 'ag-grid-community';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  name= '';
  email= '';
  phone= 0;
  city= '';
  pagination=true;
  paginationPageSize: number = 10;
  rowData:any;
  public paginationPageSizeSelector: number[] | boolean = [10, 25, 50];
  
  constructor(
    private formService: FormService
  ) {}
  ngOnInit(): void{
    this.allEmployees();
  }
  formData = {
    name: this.name,
    email: this.email,
    phone: this.phone,
    city: this.city,
  };
  columnDefs: ColDef[] = [
    { field: 'name', sortable: true, filter: true,width:200 },
    { field: 'email', sortable: true, filter: true,width:300 },
    { field: 'city', sortable: true, filter: true,width:200 },
    { field: 'phone', sortable: true, filter: true,width:200 },
    { headerName:'Update',field: '',width:200, cellRenderer: 'customCellRenderer' }
  ];

  defaultColDef: ColDef = {
    resizable: true,
  };

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxster', price: 72000 }
  // ];cellRenderer: 'customCellRenderer'


  gridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: this.paginationPageSize,
  };
  onSubmit() {
    
    this.formService.submitForm(this.formData)?.subscribe({
      next:(data)=>{
        console.log('Form submitted successfully!', data);
      },
      error:(error)=>{
        console.error('Error submitting form:', error);
      }
    });
  }
  allEmployees(){
    this.onSubmit()
  this.formService.allEmployees()?.subscribe({
    next:(data)=>{
      this.rowData = data
      console.log('Form submitted successfully!', data);
    },
    error:(error)=>{
      console.error('Error submitting form:', error);
    }
  });
}


}
