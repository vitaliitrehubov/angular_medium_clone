import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { addToFavoritesStartAction } from 'src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action';

@Component({
  selector: 'add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss']
})
export class AddToFavoritesComponents implements OnInit {
  @Input('isFavorited') isFavoritedProps: boolean;
  @Input('articleSlug') articleSlugProps: string;
  @Input('favoritesCount') favoritesCountProps: number;

  favoritesCount: number;
  isFavorited: boolean;

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  handleLike() {
    this.isFavorited = !this.isFavorited;
    this.isFavorited ? this.favoritesCount +=1 : this.favoritesCount -=1;

    this.store.dispatch(addToFavoritesStartAction({
      slug: this.articleSlugProps,
      isFavorited: this.isFavorited
    }))
  }
}
