import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import Swal from 'sweetalert2';
import * as Aos from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  title = 'Contact us';

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { };

  contactForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    emailAddress: ['', Validators.required],
    comment: ['']
  })

  ngOnInit(): void {
    Aos.init();
  }

  onSubmit() {

    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;

      const data = {
        from_name: formValue.fullName,
        from_email: formValue.emailAddress,
        to_name: 'ZoroLuf',
        message: this.getMessage(formValue)
      }
  
      this.emailService.SendEmail(data);
  
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Thank you...',
        text: 'Your message was successfully submited'
      })
  
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }

  }

  public getUserName() {
    return this.contactForm.get('fullName');
  }

  public getEmail() {
    return this.contactForm.get('emailAddress');
  }

  private getMessage(data: any) {
    const message = 
    `
      ** Contact **

      Full Name: ${data.fullName}
      Email Address: ${data.emailAddress}

      Comment: ${data.comment}
    `

    return message;
  }

}
