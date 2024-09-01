import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent {


  msg:string='';
    constructor(private util:NodeUtilityService,private router:Router){}
     


  onSubmitupdate(form: any) {
  
    console.log(form.value);
   this.util
   .update(form.value.name,
     form.value.price,
     form.value.category,
     form.value.description,
     form.value.stock
   )

   .subscribe((data) => {
   if (data.status) 
  {
    this.msg = data.message;
    //this.router.navigateByUrl('/userlogin');
    if(data.message == "Update Successfully")
      {
        this.router.navigateByUrl('/adminlogin');
      }
    else
      {
        this.msg = data.message;
        this.router.navigateByUrl('/updateproduct')
      }
  }
}
  );
   }


}
