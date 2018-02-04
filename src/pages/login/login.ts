import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  doLogin() {
    this.navCtrl.push('EditPhotoPage');
  }

  doResetPass() {
    alert("Olvidó la contraseña");
  }
  doSignup() {
    this.navCtrl.push('SignupPage');
  }
}
