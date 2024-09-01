import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router} from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-buypage',
  templateUrl: './buypage.component.html',
  styleUrl: './buypage.component.css'
})
export class BuypageComponent {

  buyproduct:any=null;
  msg:string='';
  user:string='';
  view:boolean=true;


  constructor(private util:NodeUtilityService,private router:Router){
    let u: any = localStorage.getItem('user');
    this.user=u;
    if(u==null || u==''){
      this.router.navigateByUrl('userlogin');
    }

    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.buyproduct = navigation.extras.state['buyproduct'];
    }
    
  }
  logout():void{
    localStorage.removeItem('user');
    this.router.navigateByUrl('userlogin');
  }
  ngOnInit(): void {
    
  }
  home():void
  {
    this.view=!this.view;
    this.router.navigateByUrl('main');
  }
  fertilizer():void
  {
    this.view=!this.view;
  }


  /*buy(form: any) {console.log(form.value);
    this.util.order(form.value.buyproduct,form.value.user).subscribe((data) => {
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
     }*/
    

}
