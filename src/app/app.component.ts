import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
 import {fader, slideInAnimation} from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   animations: [
     fader
  //   //slideInAnimation

   ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  title = 'myWebsitePortfolio';
}
