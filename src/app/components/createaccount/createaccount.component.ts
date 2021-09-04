import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  div1 = true;
  div2 = false;
  div3 = false;
  constructor() { }

  ngOnInit(): void {
  }

  next1() {
    this.div1 = false;
    this. div2 = true;
  }
   next2() {
    this.div1 = false;
     this.div2 = false;
     this.div3 = true;
     
   }
  

  



  
}
