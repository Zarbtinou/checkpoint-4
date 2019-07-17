import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactPricesComponent } from './contact-prices/contact-prices.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [{
  path:'',
  component: HomePageComponent,
  pathMatch: 'full'
},
{
  path:'catalogue',
  component: CatalogComponent,
  pathMatch: 'full',
},
{
  path:'prices-contact',
  component: ContactPricesComponent,
  pathMatch: 'full'
}, 
{
  path:'admin',
  component: AdminPageComponent,
  pathMatch: 'full'
} 
];

@NgModule(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
