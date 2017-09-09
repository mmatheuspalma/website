import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlockAboutMeComponent } from './block-about-me/block-about-me.component';
import { BlockTerminalComponent } from './block-terminal/block-terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockAboutMeComponent,
    BlockTerminalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
