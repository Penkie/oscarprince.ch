import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { inject } from '@vercel/analytics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        inject({ mode: isDevMode() ? 'development' : 'production' })
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
