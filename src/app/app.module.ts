import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { AppRoutingModule } from './routing/app-routing/app-routing.module';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';
import { InputFormComponent } from './components/input-form/input-form.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouteErrorComponent } from './components/route-error/route-error.component';
import { PokemonMainComponent } from './components/pokemon-main/pokemon-main.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { BerryMainComponent } from './components/berry-main/berry-main.component';
import { BerryInputComponent } from './components/berry-input/berry-input.component';
import { BerryContentComponent } from './components/berry-content/berry-content.component';
import { ItemMainComponent } from './components/item-main/item-main.component';
import { ItemInputComponent } from './components/item-input/item-input.component';
import { ItemContentComponent } from './components/item-content/item-content.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { BerryDetailsComponent } from './components/berry-details/berry-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    CapitalizeFirstLetterPipe,
    InputFormComponent,
    RouteErrorComponent,
    PokemonMainComponent,
    PokemonDetailsComponent,
    BerryMainComponent,
    BerryInputComponent,
    BerryContentComponent,
    ItemMainComponent,
    ItemInputComponent,
    ItemContentComponent,
    ItemDetailsComponent,
    BerryDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCheckboxModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
