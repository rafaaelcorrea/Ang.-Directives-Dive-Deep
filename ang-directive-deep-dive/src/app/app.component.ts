import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  oddNumbers: number[] = [1,3,5];
  evenNumbers: number[] =[2,4];
  onlyOddNumbers :boolean = false;
  
  constructor(){}

  ngOnInit(): void {
  console.log(this.onlyOddNumbers);
  }
}
