import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonsListComponent } from './pages/pokemons-list/pokemons-list.component';
import { PokemonManagementService } from './services/pokemon-management.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from '../components/forms/forms.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: PokemonsListComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    PokemonsListComponent,
    FormsComponent,
  ],
  bootstrap: [
    AppComponent,
    
  ],
  providers: [
    PokemonManagementService
  ],
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/