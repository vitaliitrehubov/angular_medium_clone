import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";

import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module';
import { TagListModule } from "src/app/shared/modules/tagList/tagList.module";

import { ArticleFormComponent } from 'src/app/shared/modules/articleForm/components/articleForm.component';


@NgModule({
  declarations: [ArticleFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatIconModule,
    MatButtonModule,
    LoadingModule,
    BackendErrorMessagesModule,
    TagListModule
  ],
  exports: [ArticleFormComponent]
})
export class ArticleFormModule {}
