import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { ContactService } from 'src/app/common/services/contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    standalone: false
})
export class ContactComponent {

  public submitted = false;
  public sentSuccessfully = false;
  public errorWhileSending = false;
  public loading = false;

  constructor(
    private contactService: ContactService
  ) {}

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

    this.loading = true;

    this.contactService.newContactForm(this.contactForm.controls.name.value!, this.contactForm.controls.email.value!, this.contactForm.controls.message.value!)
      .subscribe({
        next: () => {
          this.loading = false;
          this.sentSuccessfully = true;
          this.contactForm.reset(this.contactForm.value);
        },
        error: (err) => {
          this.loading = false;
          this.errorWhileSending = true;
        }
      })
  }
}
