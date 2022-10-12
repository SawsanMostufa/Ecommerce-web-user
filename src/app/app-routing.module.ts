import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [

  {path: '', component:HomeComponent, data: {breadcrumb: 'Home'}},
 
  {path: 'not-found', component:NotFoundComponent, data: {breadcrumb: 'Not Found'}},
  {path: 'shop',loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule), data: {breadcrumb: 'Shop'}},
  {path: 'basket',loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule),data: {breadcrumb: 'basket'}},
 
  {path: 'checkout',loadChildren: () => import('./chechout/chechout.module').then(mod => mod.ChechoutModule),data: {breadcrumb: 'chechout'}},

  {path: 'orders',loadChildren: () => import('./order/order.module').then(mod => mod.OrderModule),data: {breadcrumb: 'orders'}},

  {path: 'account',loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule),data: {breadcrumb: {skip: true}}},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
