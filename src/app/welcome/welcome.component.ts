import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

declare function penMethod(): any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  constructor(private router: Router) { }

  goToPage(pageName:string): void
  {
    this.router.navigate(['$pageName']);
  }
  
  ngOnInit(): void {
  }

}


