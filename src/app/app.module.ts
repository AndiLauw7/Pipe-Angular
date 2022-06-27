// import { NgModule } from '@angular/core';
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BiodataHeaderComponent } from './biodata-header/biodata-header.component';

// import { AppComponent } from './app.component';
// import { BiodataHeaderComponent } from './biodata-header/biodata-header.component';

// @NgModule({
//   declarations: [AppComponent, BiodataHeaderComponent],
//   imports: [BrowserModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
@NgModule({
  declarations: [AppComponent, BiodataHeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
