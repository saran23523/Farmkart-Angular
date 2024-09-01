import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  msg:string='';
    constructor(private util:NodeUtilityService,private router:Router){}
     

    
    onSubmitaddp(form: any) {
  
      console.log(form.value);
     this.util
     .insertaddp(form.value.name,
       form.value.price,
       form.value.category,
       form.value.decription,
       form.value.imagepath,
       form.value.stock
     )
  
     .subscribe((data) => {
     if (data.status) 
    {
      this.msg = data.message;
      //this.router.navigateByUrl('/userlogin');
      if(data.message == "Inserted Successfully")
        {
          this.router.navigateByUrl('/adminhome');
        }
      else
        {
          this.msg = data.message;
          this.router.navigateByUrl('/addproduct')
        }
    }
  }
    );
     }
    

}
