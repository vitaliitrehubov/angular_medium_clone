import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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

    LoadingModule,
    BackendErrorMessagesModule,
    TagListModule
  ],
  exports: [ArticleFormComponent]
})
export class ArticleFormModule {}
