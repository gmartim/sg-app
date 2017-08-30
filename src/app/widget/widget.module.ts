import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWidgetComponent } from './header-widget.component';
import { SideWidgetComponent } from './side-widget.component';
import { FooterWidgetComponent } from './footer-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderWidgetComponent, SideWidgetComponent, FooterWidgetComponent],
  exports: [HeaderWidgetComponent, SideWidgetComponent, FooterWidgetComponent]
})
export class WidgetModule { }
