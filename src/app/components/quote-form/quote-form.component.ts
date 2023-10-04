import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Quote } from 'src/app/models';
import { EmailService } from 'src/app/services/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent {

  title = 'Get a quote'

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

  quoteForm = this.formBuilder.group({
    fullName: [''],
    emailAddress: [''],
    phoneNumber: [''],
    contactMethod: [''],
    propertyType: [''],
    location: [''],
    neighborhood: [''],
    bedrooms: [''],
    bathrooms: [''],
    budgetRange: [''],
    financePreference: [''],
    specificPropertyRequirement: [''],
    timeframe: [''],
    comment: ['']
  })

  onSubmit() {

    const formValue = this.quoteForm.value;

    const data = {
      from_name: formValue.fullName,
      from_email: formValue.emailAddress,
      to_name: 'ColeDynamics',
      message: this.getMessage(formValue)
    }

    this.emailService.SendEmail(data);

    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Thank you...',
      html: `
      <p>Your message was successfully submited</p>
      <p>Kindly expect a message from us</p>`
    })

    this.quoteForm.reset();
  }

  private getMessage(data: any) {
    const message = 
    `
      ** Quote **

      ** Personal Information **

      Full Name: ${data.fullName}
      Email Address: ${data.emailAddress}
      Phone Number: ${data.phoneNumber}
      Contact Method: ${data.contactMethod}


      ** Property Preference **

      Property Type: ${data.propertyType}
      Location: ${data.location}
      Preferred Neighborhood: ${data.neighborhood}
      Number of Bedrooms: ${data.bedrooms}
      Number of Bathrooms ${data.bathrooms}


      ** Budget and Financing **

      Budget Range: ${data.budgetRange}
      Financing Preference: ${data.financePreference}


      ** Other Information **
      Specific Property Requirement: ${data.specificPropertyRequirement}
      Timeframe: ${data.timeframe}
      Additional Comments: ${data.comment}
    `

    return message;
  }
}
