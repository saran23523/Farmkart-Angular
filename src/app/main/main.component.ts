import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras} from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  products: any[] = [];
  view:boolean=true;
  msg: string='';
  user:string='';
  selectedProduct: any=null;

  constructor(private util:NodeUtilityService,private router:Router){
    let u: any = localStorage.getItem('user');
    this.user=u;
    if(u==null || u==''){
      this.router.navigateByUrl('userlogin');
    }
    this.display()
    
  }
  logout():void{
    localStorage.removeItem('user');
    this.router.navigateByUrl('userlogin');
  }
  ngOnInit(): void {
  }
  display()
  {
    this.util.display().subscribe((data)=>{
      if(data.status)
        {
          this.products=data.list;
        }
        this.msg=data.message;
    } );
  }
  selected(prod:any):void
  {
    this.selectedProduct=prod;
    this.view=!this.view;
    //console.log('Selected product : ',this.selectedProduct);
    //console.log('view',this.view);
    //this.router.navigateByUrl('parent');
  }
  back():void
  {
    this.view=!this.view;
  }
  buynow():void
  {
    const navigationExtras: NavigationExtras = {
      state: {
        buyproduct: this.selectedProduct
      }
    };
    this.router.navigate(['buypage'], navigationExtras);
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
  
}
  


