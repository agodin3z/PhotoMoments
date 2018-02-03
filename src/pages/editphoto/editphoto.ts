import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-editphoto',
  templateUrl: 'editphoto.html'
})
export class EditPhotoPage {

  photo="assets/imgs/bg4.png";

  constructor(public navCtrl: NavController) {

  }

  savePhoto(){
    alert("Photo Saved!");
  }

  noFilters() {
    let elm = <HTMLElement>document.querySelector(".photo-wrap .photo");
    elm.style.filter = 'none';
  }

  applySutro(){
    let elm = <HTMLElement>document.querySelector(".photo-wrap .photo");
    elm.style.filter = 'brightness(0.75) contrast(1.3) sepia(0.5) hue-rotate(-25deg)';
  }

  applyWillow(){
    let elm = <HTMLElement>document.querySelector(".photo-wrap .photo");
    elm.style.filter = 'saturate(0.02) contrast(0.85) brightness(1.2) sepia(0.02)';
  }

  applyToaster(){
    let elm = <HTMLElement>document.querySelector(".photo-wrap .photo");
    elm.style.filter = 'sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67)';
  }

  applyLoFi(){
    let elm = <HTMLElement>document.querySelector(".photo-wrap .photo");
    elm.style.filter = 'contrast(1.4) brightness(0.9) sepia(0.05)';
  }

  applyKelvin(){
    let elm = <HTMLElement>document.querySelector(".photo-wrap .photo");
    elm.style.filter = 'sepia(0.4) saturate(2.4) brightness(1.3) contrast(1)';
  }

  applyInkwell(){
    let elm = <HTMLElement>document.querySelector(".photo-wrap .photo");
    elm.style.filter = 'grayscale(1) brightness(1.2) contrast(1.05)';
  }


}
