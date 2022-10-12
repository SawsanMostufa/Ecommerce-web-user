import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './components/basket/basket.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'basket', component: BasketComponent}
];

@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BasketModule { }
