import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchCustomerComponent } from './app/authentic-pages/search-customer/search-customer.component';
import { authGuard } from './app/auth.guard';
import { CustomerDetailsComponent } from './app/authentic-pages/customer-details/customer-details.component';
import { HeaderComponent } from './app/authentic-pages/layout/header/header.component';
import { FooterComponent } from './app/authentic-pages/layout/footer/footer.component';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent },
      {path:'search-customers', component:SearchCustomerComponent},
      {path:'customer-details',component:CustomerDetailsComponent},
      {path:'app-header' ,component:HeaderComponent},
      {path:'app-footer',component:FooterComponent}
    ])
  ]
});

