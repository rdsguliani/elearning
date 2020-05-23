import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthRoutingModule } from '../../auth-routing.module';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @ViewChild('signInForm') signInForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submitHandler(event) {
    event.preventDefault()
    console.log(this.signInForm);
    const email = this.signInForm.controls.email.value;
    const password = this.signInForm.controls.password.value;

    this.authService.signIn({email, password}).then(response => {
      console.log(response)
      this.authService.navigateToIndex();
    } )
    .catch(err => console.log(err))

  }

}
