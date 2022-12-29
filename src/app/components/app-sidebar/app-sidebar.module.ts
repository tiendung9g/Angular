import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSideBarRoutingModule } from './app-sidebar-routing.module';
import { AppSidebarComponent } from './app-sidebar.component';

@NgModule({
  declarations: [AppSidebarComponent],
  imports: [
    BrowserModule,
    AppSideBarRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  bootstrap: [AppSidebarComponent],
  exports: [AppSidebarComponent],
})
export class AppSidebarModule {}
