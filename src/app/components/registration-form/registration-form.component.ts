import { Component } from '@angular/core';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  user: any = {};

  submitForm() {
    console.log(this.user); // You can perform further actions with the form data here
  }

}
