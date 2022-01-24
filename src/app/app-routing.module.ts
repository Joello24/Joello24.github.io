import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent} from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'welcome-component', component: WelcomeComponent, data:{animation: 'WelcomePage'}},
  {path: '', component: HomeComponent },
  {path: 'portfolio-component', component:PortfolioComponent, data: {animation: 'PortfolioPage'}},
  {path: 'contact-component', component:ContactComponent, data: {animation: 'ContactPage'}},
  {path: 'about-component', component:AboutComponent, data: {animation: 'AboutPage'}},
  {path: 'project-component', component:ProjectComponent, data: {animation: 'AboutPage'}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
