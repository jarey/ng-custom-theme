import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [ThemePickerComponent, NavBarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    ThemePickerComponent,
    NavBarComponent,
    MatButtonModule
  ]
})
export class SharedModule { }
