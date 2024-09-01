import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';


@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrl: './deleteproduct.component.css'
})
export class DeleteproductComponent {


  msg: string = '';
  constructor(private util:NodeUtilityService,private router:Router){}
 
  deleteprod(form: any) {
    console.log("if");
    this.util
      .deleteprod(form.value.name)
      .subscribe((data) => {
        if (data.status) {
          console.log("if");
          localStorage.setItem('admin', form.value.email);
          console.log("set");
          this.msg = data.message;
          console.log("Deletion successful");
          this.router.navigateByUrl('/adminhome');
        } else {
          this.msg = data.message;
          console.log("Deletion unsuccessful");
          this.router.navigateByUrl('/deleteproduct');
        }
      });
  } 
}
