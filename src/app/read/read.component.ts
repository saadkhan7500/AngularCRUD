import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{

  users:any=[{
    id:0,
    name:"",
    email:"",
    phone:"",
    password:""
  }];
  constructor(private user:UserService)
  {
    this.user.getUsers().subscribe(
      response=>
      {
        console.log(response);
        this.users=response;
      },
      error=>{

      });
  }
  ngOnInit(): void {
      
  }

  
}
