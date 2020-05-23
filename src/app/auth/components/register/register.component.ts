import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm') registerForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }


  submitHandler(event) {
    event.preventDefault()
    console.log(this.registerForm);
    const firstName = this.registerForm.controls.firstName.value
    const lastName = this.registerForm.controls.lastName.value;
    const email = this.registerForm.controls.email.value;
    const password = this.registerForm.controls.password.value;

    this.authService.register({email, password, firstName, lastName}).then(response => {
      console.log(response)
      this.authService.navigateToIndex();
    })
    .catch(err => console.log(err))

  }
  

}
