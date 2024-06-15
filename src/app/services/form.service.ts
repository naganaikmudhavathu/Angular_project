import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = `http://localhost:5000`; // Replace with your server endpoint

  constructor(private http: HttpClient) {}

  submitForm(formData: any) {
    return this.http.post(this.apiUrl+`/employees/add-emp`, formData);
  };
  allEmployees() {
    return this.http.get(this.apiUrl+`/allemployees`);
  }
}
