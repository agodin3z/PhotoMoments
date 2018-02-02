import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  signup=SignupPage;

  constructor(public navCtrl: NavController) {

  }

  // Attempt to login in through our User service
  doLogin() {
      console.log("Inicio de Sesion");
  }

  doResetPass() {
      console.log("Olvidó la contraseña");
  }
  doSignup() {
    this.navCtrl.push('SignupPage');
  }
}
