import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  users:any=[{
    id:0,
    name:"",
    email:"",
    phone:"",
    password:""
  }];
  temp:any={
    id:0,
    name:"",
    email:"",
    phone:"",
    password:""
  }
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

    deleteUser(id:any)
    {
      console.log(id);
      this.user.deleteUser(id).subscribe(
        response=>{
           
        },
        error=>
        {
        });
    }
}
