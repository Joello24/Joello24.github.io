import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserTestingModule } from '@angular/platform-browser/testing';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDarkTheme = true;
  windowHeight: any;
  constructor() { 
  }

  ngOnInit(): void {
    const button = document.getElementById("btn");
    button?.addEventListener("click", this.listenerFunction);
  }


  listenerFunction(this: HTMLElement, ev: Event) {
    const height = window.innerHeight;
    ev.preventDefault();
    console.log("clicked");
    window.scrollTo({top:height, behavior:'smooth'})
  }
}

