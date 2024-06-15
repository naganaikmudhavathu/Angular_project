import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { CatagoriesComponent } from './components/catagories/catagories.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { EmployeeCRUDComponent } from './components/employee-crud/employee-crud.component';
import { MainComponent } from './components/main/main.component';
import { MaskAccnaPipe } from './custom-pipes/mask-accna.pipe';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { EmpCrudComponent } from './components/emp-crud/emp-crud.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContacUsComponent } from './components/contac-us/contac-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component'
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    BodyComponent,
    CatagoriesComponent,
    DatabindingComponent,
    EmployeeCRUDComponent,
    MainComponent,
    MaskAccnaPipe,
    ProductlistComponent,
    UserComponent,
    ProductComponent,
    EmpCrudComponent,
    RegistrationFormComponent,
    HomeComponent,
    AboutUsComponent,
    ContacUsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
