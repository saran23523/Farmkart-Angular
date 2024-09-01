import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {

  
  email: string = '';
  password: string = '';
  username: string = '';
  user: string = '';
  msg: string = '';

  constructor(private util:NodeUtilityService,private router:Router){}
  

  
  
  onSubmit(form: any) {
    console.log("if");
    this.util
      .login(form.value.email, form.value.password)
      .subscribe((data) => {
        if (data.status) {
          console.log("if");
          localStorage.setItem('user', form.value.email);
          localStorage.setItem('username',form.value.username);
          console.log("set");
          this.msg = data.message;
          console.log("Login successful");
          this.router.navigateByUrl('/main');
        } else {
          this.msg = data.message;
          console.log("Login unsuccessful");
          this.router.navigateByUrl('/userlogin');
        }
      });
  }


}

