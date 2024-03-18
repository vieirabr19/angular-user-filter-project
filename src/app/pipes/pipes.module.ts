import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddressPipe } from './address.pipe';
import { PhonePipe } from './phone.pipe';
import { StatusPipe } from './status.pipe';

const IMPORTS_PIPES = [PhonePipe, AddressPipe, StatusPipe];

@NgModule({
  declarations: IMPORTS_PIPES,
  imports: [CommonModule],
  exports: IMPORTS_PIPES,
})
export class PipesModule {}
