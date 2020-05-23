import { Injectable } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';


@Injectable()
export class AuthService {

  constructor(private navigationService: NavigationService) { }

  signIn(userDetails) {
    console.log(userDetails)
    const promise = new Promise((resolve, reject) => {
      resolve('authentiated');
    })

    return promise;
  }

  register(userDetails) {
    console.log(userDetails)
    const promise = new Promise((resolve, reject) => {
      resolve('registerd');
    })

    return promise;
  }

  navigateToIndex() {
    this.navigationService.navigate('/');
  }

}
