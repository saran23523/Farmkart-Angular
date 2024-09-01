import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BuypageComponent } from './buypage/buypage.component';

const routes: Routes = [
  {path:'',redirectTo:'userlogin',pathMatch:'full'},
  {path:"userlogin",component:UserloginComponent},
  {path:"register",component:RegisterComponent},
  {path:"about",component:AboutComponent},
  {path:"main",component:MainComponent},
  {path:"deleteproduct",component:DeleteproductComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"addproduct",component:AddproductComponent},
  {path:"updateproduct",component:UpdateproductComponent},
  {path:"adminhome",component:AdminhomeComponent},
  {path:"parent",component:ParentComponent},
  {path:"child",component:ChildComponent},
  {path:"buypage",component:BuypageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
