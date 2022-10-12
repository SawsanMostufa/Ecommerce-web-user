import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'shop',component:ShopComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'product-item',component:ProductItemComponent}

  ];

@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShopModule { }
