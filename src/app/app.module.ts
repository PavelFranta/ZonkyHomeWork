import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';
import {registerLocaleData} from '@angular/common';
import localeCZ from '@angular/common/locales/cs';

registerLocaleData(localeCZ, 'cs-CZ');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'cs-CZ'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
