import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { dtype } from '../datatype';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http :HttpClient,private router:Router) { }
  userSignUp(data:dtype){
    this.http.post("http://localhost:3000/seller",
    data,
    {observe:'response'}).subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
      console.warn("result:",result);
    })
    return false;
  }
}
