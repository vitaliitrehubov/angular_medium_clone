import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { TopBarModule } from 'src/app/shared/modules/topBar/topBar.module';
import { SidenavListModule } from 'src/app/shared/modules/sidenavList/sidenavList.module';
import { GlobalFeedModule } from 'src/app/globalFeed/globalFeed.module';
import { YourFeedModule } from 'src/app/yourFeed/yourFeed.module';
import { TagFeedModule } from 'src/app/tagFeed/tagFeed.module';
import { ArticleModule } from 'src/app/article/article.module';
import { CreateArticleModule } from 'src/app/createArticle/createArticle.module';
import { EditArticleModule } from 'src/app/editArticle/editArticle.module';
import { SettingsModule } from 'src/app/settings/settings.module';
import { UserProfileModule } from 'src/app/userProfile/userProfile.module';

import { environment } from 'src/environments/environment';
import { AppComponent } from 'src/app/app.component';
import { AuthInterceptor } from 'src/app/shared/services/authInterceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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

    MatSidenavModule,

    AppRoutingModule,
    AuthModule,
    TopBarModule,
    SidenavListModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    EditArticleModule,
    ArticleModule,
    SettingsModule,
    UserProfileModule,
    BrowserAnimationsModule
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
