import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonManagementService } from '../../services/pokemon-management.service';
import { Pokemon } from '../../services/pokemon.model';


@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.css',
})

export class PokemonsListComponent {
  pokemons: Pokemon[] = [];
  constructor(private pokemonManagementService: PokemonManagementService) {}
  ngOnInit() {
    this.getAllPokemons();
  }
  getAllPokemons() {
    this.pokemonManagementService.getAllPokemons().subscribe(
      (data) => {
        this.pokemons = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async deletePokemon(nom: string){
    this.getAllPokemons();
    await this.pokemonManagementService.deletePokemon(nom);
    this.getAllPokemons();
    window.alert('Le pokemon ' + nom + ' a bien été supprimé');
  }

}
