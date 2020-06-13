import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from '@app/material';

import { ComponentsModule } from './components';
import { BooksPageComponent } from './components/books-page.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { BooksPageEffects } from './effects/books-page.effects';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: '', component: BooksPageComponent },
    ]),
    StoreModule.forFeature('books', reducers),
    EffectsModule.forFeature([BooksPageEffects]),
  ]
})
export class BooksModule {}
