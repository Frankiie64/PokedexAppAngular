import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Region } from '../models/region';
import { PokemonService } from '../services/pokemon-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  async ngOnInit() {
    this.pokemons = await this.getPokemons();

  }

  async getPokemons(): Promise<Pokemon[]> {
    try {
      const response = await this.pokemonService.getAllPokemons().toPromise();

      if(response === undefined){
        return [];
      }

      return response;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}