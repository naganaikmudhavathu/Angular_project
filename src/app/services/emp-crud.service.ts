import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpCrudService {
  apiUrl:string='http://localhost:3000/employees';
  constructor(private http:HttpClient) { }

  getAllEmployees(){
    return this.http.get(this.apiUrl);
  }
}
