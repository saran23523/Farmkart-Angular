import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {

  products: any[] = [];
  msg: string='';
  admin:string='';
  list:any;

  selectedProduct: any;

  filteredProducts: any[] = []; // Array to store filtered products
  categoryFilter: string = ''



  constructor(private util:NodeUtilityService,private router:Router){
    let u: any = localStorage.getItem('admin');
    this.admin=u;
    if(u==null || u==''){
      this.router.navigateByUrl('userlogin');
    }
    //this.display()
  }
  logout():void{
    localStorage.removeItem('admin');
    this.router.navigateByUrl('userlogin');
  }

  gotoaddpage():void{
    this.router.navigateByUrl('/addproduct');
  }

  gotoupdatepage():void{
    this.router.navigateByUrl('/updateproduct');
  }

  gotodeletepage():void{
    this.router.navigateByUrl('/deleteproduct');
  }

}
