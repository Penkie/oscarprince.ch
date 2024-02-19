import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from 'src/app/common/components/error/error.component';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    ErrorComponent
  ]
})
export class ContactModule { }
