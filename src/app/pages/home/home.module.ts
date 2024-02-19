import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ConsoleComponent } from './components/console/console.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ConsoleComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
