import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UserHomeComponent } from './components/user-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '@app/material';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [UserHomeComponent]
})
export class AuthModule { }
