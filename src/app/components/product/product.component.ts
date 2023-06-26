import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product:any=[];
  constructor(private http:HttpClient){}
  ngOnInit(): void{
  let url= 'https://fakestoreapi.com/products';
    this.http.get(url).subscribe(response=>{
      this.product=response;
      console.log(response)
    })

  }
}
