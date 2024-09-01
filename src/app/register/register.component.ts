import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    msg:string='';
    constructor(private util:NodeUtilityService,private router:Router){}
     

    

    onSubmit(form: any) {console.log(form.value);
    this.util.insert(form.value.name,form.value.email,form.value.age,form.value.gender,form.value.phone,form.value.password).subscribe((data) => {
      if (data.status) 
      {
        this.msg = data.message;
        //this.router.navigateByUrl('/userlogin');
        if(data.message == "Inserted Successfully")
        {
          this.router.navigateByUrl('/userlogin');
        }
        else
        {
          this.msg = data.message;
          this.router.navigateByUrl('/main')
        }
      }
      }
    );
     }
          
  }
  

