import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChechoutComponent } from './components/chechout/chechout.component';
import { ChechoutaddressComponent } from './components/chechoutaddress/chechoutaddress.component';
import { ChechoutpaymentComponent } from './components/chechoutpayment/chechoutpayment.component';
import { ChechoutsuccesComponent } from './components/chechoutsucces/chechoutsucces.component';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

const routes: Routes=[
{path:'chechout',component:ChechoutComponent },
{path:'chechoutaddress', component:ChechoutaddressComponent},
{path:'chechoutsucces', component:ChechoutsuccesComponent}

];

@NgModule({
  declarations: [
    ChechoutComponent,
    ChechoutaddressComponent,
    ChechoutpaymentComponent,
    ChechoutsuccesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChechoutModule { }
