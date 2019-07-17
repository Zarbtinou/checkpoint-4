import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactPricesComponent } from './contact-prices/contact-prices.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AddPricesComponent } from './add-prices/add-prices.component';
import { GetpricesComponent } from './getprices/getprices.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConfigurationpannelComponent } from './configurationpannel/configurationpannel.component';
import { AddfoodComponent } from './addfood/addfood.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    HomePageComponent,
    AdminPageComponent,
    CatalogComponent,
    ContactPricesComponent,
    AddPricesComponent,
    GetpricesComponent,
    HeaderComponent,
    FooterComponent,
    ConfigurationpannelComponent,
    AddfoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
