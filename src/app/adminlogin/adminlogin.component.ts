import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

  email: string = '';
  password: string = '';
  admin: string = '';
  msg: string = '';

  constructor(private util:NodeUtilityService,private router:Router){}
  
  onSubmitadmin(form: any) {
    console.log("if");
    this.util
      .loginadmin(form.value.email, form.value.password)
      .subscribe((data) => {
        if (data.status) {
          console.log("if");
          localStorage.setItem('admin', form.value.email);
          console.log("set");
          this.msg = data.message;
          console.log("Login successful");
          this.router.navigateByUrl('/adminhome');
        } else {
          this.msg = data.message;
          console.log("Login unsuccessful");
          this.router.navigateByUrl('/adminlogin');
        }
      });
  }

}
