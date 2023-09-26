import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { RouteErrorComponent } from '../../components/route-error/route-error.component'
import { PokemonMainComponent } from "src/app/components/pokemon-main/pokemon-main.component";
import { PokemonDetailsComponent } from "src/app/components/pokemon-details/pokemon-details.component";

const routes: Routes = [
  {path: '', component: RouteErrorComponent},
  {path: 'pokemon', component: PokemonMainComponent},
  {path: 'pokemon/:id', component: PokemonDetailsComponent},
  /*last route has to be the '**' one to avoid redirecting to routeerror even with correct routes*/
  {path: '**', component: RouteErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
