import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  title = 'What are you looking for?';

  constructor(private emailService: EmailService) { }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.getPopUp();
    }, 1500)
    
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

  private getPopUp() {
    Swal.fire({
      position: 'center',
      width: '400',
      showCancelButton: true,
      confirmButtonText: 'send message',
      backdrop: `
      rgba(11 11 11 / 83%)
      left top
      no-repeat
      `,
      title: 'Contact us',
      html: `
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-3" style="text-align: left;">
            <label for="fullName" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="fullName" formControlName="fullName">
          </div>
          <div class="col-12 mb-3" style="text-align: left;">
            <label for="emailAddress" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="emailAddress" formControlName="emailAddress">
          </div>
          <div class="col-12" style="text-align: left;">
            <label class="form-label">Comment</label>
            <textarea class="form-control" id="comment" placeholder="Leave a comment here" style="height: 100px" formControlName="comment"></textarea>
          </div>
        </div>
      </div>
      </form>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const fullName = (<HTMLInputElement>Swal.getPopup()?.querySelector('#fullName')).value;
        const emailAddress = (<HTMLInputElement>Swal.getPopup()?.querySelector('#emailAddress')).value;
        const comment = (<HTMLInputElement>Swal.getPopup()?.querySelector('#comment')).value
        if (!fullName || !emailAddress) {
          Swal.showValidationMessage(`Please enter full name and email`)
        }
        return { fullName: fullName, emailAddress: emailAddress, comment: comment }
      },
    }).then((result) => {

      if(!result.dismiss) {

        const data = {
          from_name: result.value.fullName,
          from_email: result.value.emailAddress,
          to_name: 'ColeDynamics',
          message: this.getMessage(result.value)
        }
    
        this.emailService.SendEmail(data);

        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Thank you...',
          text: 'Your message was successfully submited'
        })
      }
      
    })
  }
}