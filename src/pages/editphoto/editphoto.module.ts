import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { EditPhotoPage } from './editphoto';

@NgModule({
  declarations: [
    EditPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPhotoPage)
  ],
  exports: [
    EditPhotoPage
  ]
})
export class EditPhotoPageModule { }
