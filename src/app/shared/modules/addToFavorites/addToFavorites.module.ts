import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EffectsModule } from '@ngrx/effects';

import { AddToFavoritesEffect } from "src/app/shared/modules/addToFavorites/store/effects/addToFavorites.effect";
import { AddToFavoritesComponents } from 'src/app/shared/modules/addToFavorites/components/addToFavorites.component';
import { AddToFavoritesService } from 'src/app/shared/modules/addToFavorites/services/addToFavorites.service';

@NgModule({
  declarations: [AddToFavoritesComponents],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      AddToFavoritesEffect
    ])
  ],
  exports: [AddToFavoritesComponents],
  providers: [AddToFavoritesService]
})
export class AddToFavoritesModule {}
