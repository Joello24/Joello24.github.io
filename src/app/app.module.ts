import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ArrowsComponent } from './arrows/arrows.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ContactService } from './contact.service';
import { ConnectionService } from './connection.service';
import { ArrowsUpComponent } from './arrows-up/arrows-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WelcomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    ArrowsComponent,
    ArrowsUpComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule 
  ],
  providers: [ContactService, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
