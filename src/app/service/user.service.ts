import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  private baseUrl:string="http://localhost:2222"
  addUser(data:any)
  {
    return this.http.post(`${this.baseUrl}/add`,data)
  }

  getUsers()
  {
    return this.http.get<any>(`${this.baseUrl}/get`);
  }
  getUser(id:any)
  {
    return this.http.get<any>(`${this.baseUrl}/get/`+id);
  }
  updateUser(data:any)
  {
    console.log(data.id);
    return this.http.put(`${this.baseUrl}/update/`+data.id,data);
  }

  deleteUser(data:any)
  {
    return this.http.delete(`${this.baseUrl}/delete/`+data)
  }

}
