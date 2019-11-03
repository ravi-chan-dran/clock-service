import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerMainComponent } from './timer-main/timer-main.component';
import { ClockMainComponent } from './clock-main/clock-main.component';
import { MaterialBundleModule } from './material-bundle/material-bundle.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClockComponent } from './clock/clock.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerMainComponent,
    ClockMainComponent,
    ClockComponent,
    StopWatchComponent
  ],
  imports: [
    BrowserModule,
    MaterialBundleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
