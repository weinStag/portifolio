import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { AppTranslateLoader } from "./_config/translate-loader";
import { LanguageService } from "./_config/language.service";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DarkModeToggleComponent } from './shared/dark-mode-toggle/dark-mode-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    DarkModeToggleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: AppTranslateLoader },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
