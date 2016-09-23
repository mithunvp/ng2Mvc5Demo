///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app';

@NgModule({
    imports: [BrowserModule ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }