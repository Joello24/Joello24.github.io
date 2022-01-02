import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})


export class PortfolioComponent implements OnInit {

  
  windowHeight: any;
  
  constructor() {
   }


  ngOnInit(): void {
    let pageHeight = document.body.clientHeight;
    let windowHeight;
    let currentHeight;
    windowHeight = window.innerHeight;
    currentHeight = window.innerHeight;
    const upButton = document.getElementById("btn2");
    upButton?.addEventListener("click", function(){
      window.scrollTo({top:0, behavior:'smooth'})
      currentHeight=0;
    });

    const downButton = document.getElementById("btn");
    downButton?.addEventListener("click", function(){
      window.scrollTo({top:currentHeight, behavior:'smooth'})
      currentHeight += windowHeight;
    });
  }
  
}


