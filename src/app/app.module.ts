import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { TopBarModule } from 'src/app/shared/modules/topBar/topBar.module';
import { GlobalFeedModule } from 'src/app/globalFeed/globalFeed.module';

import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';
import { AuthInterceptor } from 'src/app/shared/services/authInterceptor.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    StoreModule.forRoot({
      router: routerReducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot(),

    AppRoutingModule,
    AuthModule,
    TopBarModule,
    GlobalFeedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
