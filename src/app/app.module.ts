import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HighlightDirective } from './highlight.directive';
import { ContentComponent } from './components/content/content.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ChercherComponent } from './components/chercher/chercher.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' 
const appRoutes: Routes = [
  
  { path: 'chercher', component: ChercherComponent },
  { path: 'login', component: LoginComponent },
    { path: 'crerCompte', component: CreateaccountComponent },
  { path: '', component: ContentComponent },
    { path: '',   redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HighlightDirective,
    ContentComponent,
    CategoriesComponent,
    ChercherComponent,
    CreateaccountComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
