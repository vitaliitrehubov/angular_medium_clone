import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { FeedModule } from 'src/app/shared/modules/feed/feed.module';

import { reducers } from 'src/app/userProfile/store/reducers';
import { FetchUserProfileEffect } from 'src/app/userProfile/store/effects/fetchUserProfile.effect';
import { UserProfileComponent } from 'src/app/userProfile/components/userProfile.component';
import { UserProfileService } from 'src/app/userProfile/services/userProfile.service';

const routes: Routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent
  }
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([
      FetchUserProfileEffect
    ]),
    StoreModule.forFeature('userProfile', reducers),

    FeedModule
  ],
  providers: [UserProfileService]
})
export class UserProfileModule {}
