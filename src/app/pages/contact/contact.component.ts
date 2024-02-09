import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  public submitted = false;

  public contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    message: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(500)]))
  });

  public submitForm(): void {
    this.submitted = true;

    if (!this.contactForm.valid) {
      return;
    }
  }
}
