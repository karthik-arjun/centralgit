import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
username:string;
useremail:string;
usermobile:number;
usersalary:number;
myFormGroup:FormGroup;

  constructor() { }

  ngOnInit() {
    var name_pattern=/^[a-zA-Z]+$/
    var email_pattern=/^\S+@[a-zA-Z][.]+[a-zA-Z]+$/
    var mobile_pattern=/^\d{10,10}$/
    var salary_pattern=/\d/
    this.myFormGroup=new FormGroup({
        emName:new FormControl(null,[Validators.required,Validators.pattern(name_pattern)]),
        emEmail:new FormControl(null,[Validators.required,Validators.pattern(email_pattern)]),
        emMobile:new FormControl(null,[Validators.required,Validators.pattern(mobile_pattern)]),
        emSalary:new FormControl(null,[Validators.required,Validators.pattern(salary_pattern)])
    })

  }
  onSubmit(){
   console.log(this.myFormGroup)
  }

}













  