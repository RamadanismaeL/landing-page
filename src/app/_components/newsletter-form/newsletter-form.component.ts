import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../_services/newsletter.service';

@Component({
  selector: 'app-newsletter-form',
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss',
  providers: [ NewsletterService ]
})
export class NewsletterFormComponent {
  name = '';
  email = '';
  newsletterForm!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService)
  {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  submit() {
    //console.log(this.newsletterForm.value);
    //this.newsletterForm.reset();
    this.loading.set(true);
    if(this.newsletterForm.valid)
    {
      this.service.sendData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
        next: (response) => {
          console.log('Data successfully sent!', response);
          this.newsletterForm.reset();
          this.loading.set(false);
        },
        error: (error) => {
          console.error('Error occured: ', error);
        },
      });
    }
  }
}
