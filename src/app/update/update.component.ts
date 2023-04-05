import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  globalId:any;
  showUpdateForm=false;

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
  
     getUser(id:any)
    {
      console.log(id);
      this.user.getUser(id).subscribe(
        response=>
        {
          this.temp=response;
        },
        error=>
        {

        });
      return true;
    }
    updateUser()
    {
     
      this.temp.id=this.users.id;
      this.temp.name=this.users.name;
      this.temp.email=this.users.email;
      this.temp.phone=this.users.phone;
      this.temp.password=this.users.password;
      console.log(this.temp);
       this.user.updateUser(this.temp).subscribe(
        response=>
        {
           console.log(response);
        },
        error=>
        {
       console.log(error);
        }
       );
    }

  }
  