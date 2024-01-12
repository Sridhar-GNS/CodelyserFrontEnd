import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrl: './new-user-form.component.scss'
})
export class NewUserFormComponent {
  name:string = "";
  email:string = "";
  private apiUrl = 'http://localhost:8081/users/getAllUsers';
  constructor(private http: HttpClient) {}
  addUser(){
    if(this.name != "" && this.email != ""){
      console.log(this.name, this.email);
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post<any>(`${this.apiUrl}`, {}, { headers }).subscribe(response => console.log(response));
    }else{

    }
  }
}
