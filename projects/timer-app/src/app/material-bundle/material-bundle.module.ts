import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MAT_MODULES = [
  MatTabsModule,
  MatSliderModule,
  MatSliderModule,
  MatButtonModule,
  MatCardModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MAT_MODULES
  ],
  exports: [
    ...MAT_MODULES
  ]
})
export class MaterialBundleModule { }
