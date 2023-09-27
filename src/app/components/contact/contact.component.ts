import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  title = 'Contact us';

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { };

  contactForm = this.formBuilder.group({
    fullName: [''],
    emailAddress: [''],
    comment: ['']
  })

  onSubmit() {

    const formValue = this.contactForm.value;

    const data = {
      from_name: formValue.fullName,
      from_email: formValue.emailAddress,
      to_name: 'ColeDynamics',
      message: this.getMessage(formValue)
    }

    this.emailService.SendEmail(data);

    alert('Message has been sent!')
    this.contactForm.reset();

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
