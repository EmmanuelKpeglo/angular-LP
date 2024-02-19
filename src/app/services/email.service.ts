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
    emailjs.init('NHNx9PUZqvMzzogFU');

    let response = await emailjs.send("service_v3in41d","template_pkrdy2c", data);
  }
}
