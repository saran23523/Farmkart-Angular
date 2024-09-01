import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeUtilityService {
  /*display() {
    throw new Error('Method not implemented.');
  }*/

  constructor(private httpClient:HttpClient) {}
    url:string="http://localhost:5000/";

  insert(name: string,email:string,age:string,gender:string,phone:string,password:string):Observable<any> {
    return this.httpClient.get(this.url +'register?name=' +name +'&email=' +email +'&age=' +age +'&gender=' +gender +'&phone=' +phone +'&password=' +password);
  }

  insertaddp(name: string,price:string,category:string,description: any[] = [],imagepath:string,stock:string,):Observable<any> {
    return this.httpClient.get(this.url +'addproduct?name=' +name +'&price=' +price +'&category=' +category +'&description=' +description +'&imagepath=' +imagepath +'&stock=' +stock);
  }

  update(name: string,price:string,category:string,description: any[] = [],stock:string,):Observable<any> {
    return this.httpClient.get(this.url +'productupdate?name=' +name +'&price=' +price +'&category=' +category +'&description=' +description +'&stock=' +stock);
  }

  deleteprod(name:string):Observable<any>{
    return this.httpClient.get(this.url+ 'deleteproduct?name='+name);
  }
  
  login(email: string, password: string): Observable<any> {
    return this.httpClient.get(this.url + 'userlogin?email=' + email + '&password=' + password);
  }

  loginadmin(email: string, password: string): Observable<any> {
    return this.httpClient.get(this.url + 'adminlogin?email=' + email + '&password=' + password);
  }

  display(): Observable<any> {
    return this.httpClient.get(this.url + 'findAll');
  }

  getproductdetails(prodname: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url} pd/${prodname}`);
  }

  /*order():Observable<any> {
    return this.httpClient.get(this.url +'register?name=' +name +'&email=' +email +'&age=' +age +'&gender=' +gender +'&phone=' +phone +'&password=' +password);
  }*/
  
  
}

