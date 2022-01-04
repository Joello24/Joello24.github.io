import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent} from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WelcomeComponent } from './welcome/welcome.component';
const routes: Routes = [

  {path: '', component: WelcomeComponent},
  {path: 'home-component', component: HomeComponent, data: {animation: 'HomePage'}},
  {path: 'portfolio-component', component:PortfolioComponent, data: {animation: 'PortfolioPage'}},
  {path: 'contact-component', component:ContactComponent, data: {animation: 'ContactPage'}},
  {path: 'about-component', component:AboutComponent, data: {animation: 'AboutPage'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
