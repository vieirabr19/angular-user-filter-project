import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { provideNativeDateAdapter } from '@angular/material/core';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';

import { FilterComponent } from './filter/filter.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent, UserListComponent],
  imports: [CommonModule, FormsModule, AngularMaterialModule, PipesModule],
  exports: [
    AngularMaterialModule,
    UserDetailsComponent,
    FilterComponent,
    UserListComponent,
  ],
  providers: [provideNativeDateAdapter()],
})
export class ComponentsModule {}
