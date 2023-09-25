import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = "";

  constructor(private http: HttpClient) {}
  
  async SendEmail(data: any) {
    emailjs.init('Tv7riSWNxQSpxgz_e');

    let response = await emailjs.send("service_19hlt4o","template_ygq71rd", data);
  }
}


// mine
// emailjs.init('sAPN0vBz3TVR6xMxa');

// let response = await emailjs.send("service_41s3wxw","template_ypi589q", data);