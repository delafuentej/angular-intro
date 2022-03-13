import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// import services
import { TeamService }from './team.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';

const appRoutes: Routes = [
  {path:'about', component: AboutUsComponent },
  {path:'contact', component: ContactComponent },
  {path:'team/:id', component: TeamComponent },
  {path:'info', component: MainComponent },
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'**', redirectTo:'/', pathMatch: 'full'},

]




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ContactComponent,
    HomeComponent,
    AboutUsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
