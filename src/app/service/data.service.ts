import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://localhost:8000/api/employees');
  }

  insertData(data: Employee) {
    return this.httpClient.post('http://localhost:8000/api/addEmployee', data);
  }

  deleteData(id: any) {
    return this.httpClient.delete('http://localhost:8000/api/deleteEmployee/'+id);
  }

  getEmployeeById(id: any) {
    return this.httpClient.get('http://localhost:8000/api/employee/'+id);
  }
}
