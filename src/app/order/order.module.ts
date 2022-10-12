import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'order-details',component:OrderDetailsComponent}
  
  ];

@NgModule({
  declarations: [
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
