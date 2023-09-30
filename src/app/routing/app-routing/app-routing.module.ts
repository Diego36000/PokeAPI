import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { RouteErrorComponent } from '../../components/route-error/route-error.component'
import { PokemonMainComponent } from "src/app/components/pokemon-main/pokemon-main.component";
import { PokemonDetailsComponent } from "src/app/components/pokemon-details/pokemon-details.component";
import { BerryMainComponent } from "src/app/components/berry-main/berry-main.component";
import { BerryDetailsComponent } from "src/app/components/berry-details/berry-details.component";
import { ItemMainComponent } from "src/app/components/item-main/item-main.component";
import { ItemDetailsComponent } from "src/app/components/item-details/item-details.component";
import { AppComponent } from "src/app/app.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'pokemon', component: PokemonMainComponent},
  {path: 'pokemon/:id', component: PokemonDetailsComponent},
  {path: 'berry', component:BerryMainComponent},
  {path: 'berry/:id', component:BerryDetailsComponent},
  {path: 'item', component:ItemMainComponent},
  {path: 'item/:id', component:ItemDetailsComponent},
  {path: '**', component: RouteErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
