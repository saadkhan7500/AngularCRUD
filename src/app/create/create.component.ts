import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  data={
    name:"",
    email:"",
    phone:"",
    password:"",
  }
  ngOnInit(): void {
      
  }

 
  constructor(private user:UserService){}

  addUser()
  {
    console.log(this.data)
    this.user.addUser(this.data).subscribe(
      response=>
      {
        console.log(response);
      },
      error=>
      {
        console.log(error);
      }
    )
  }

}
