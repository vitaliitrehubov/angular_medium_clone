import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendErrorMessages } from 'src/app/shared/modules/backendErrorMessages/components/backend-error-messages/backend-error-messages.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessages],
  exports: [BackendErrorMessages],
})
export class BackendErrorMessagesModule {}

