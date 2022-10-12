import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {  RouterModule, Routes } from '@angular/router';

const routes:Routes=[
{path:'nav-bar',component:NavBarComponent},
{path:'footer',component:FooterComponent},
{path:'**',component:NotFoundComponent}

];

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreModule { }
