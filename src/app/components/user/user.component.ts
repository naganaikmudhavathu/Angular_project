import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user:any=[]
constructor(private http:HttpClient){}
  ngOnInit(): void{
  let url= 'https://jsonplaceholder.typicode.com/users';
    this.http.get(url).subscribe(response=>{
      this.user=response;
      console.log(response)
    })

  }


}
