import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rotas
import { Routing, RoutingProviders } from './app.routing';

// Root
import { AppComponent } from './app.component';

// Shared
import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';

// Pages
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    SubMenuComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
