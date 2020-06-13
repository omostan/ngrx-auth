import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UserHomeComponent } from './components/user-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '@app/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { LoginPageComponent } from './components/login-page.component';
import { LoginFormComponent } from './components/login-form.component';
import { CallbackComponent } from './components/callback.component';
import { LogoutPromptComponent } from './components/logout-prompt.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [UserHomeComponent, LoginPageComponent, LoginFormComponent, CallbackComponent, LogoutPromptComponent],
  entryComponents: [LogoutPromptComponent]
})
export class AuthModule { }
