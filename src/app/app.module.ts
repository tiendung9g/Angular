import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppSidebarModule } from './components/app-sidebar/app-sidebar.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppSidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
