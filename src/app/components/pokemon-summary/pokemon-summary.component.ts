import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../models/Pokemon";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon-summary',
  templateUrl: './pokemon-summary.component.html',
  styleUrls: ['./pokemon-summary.component.scss']
})
export class PokemonSummaryComponent implements OnInit {
  public pokemon: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  private getPokemon(): void {
    this.pokemonService.getAllPokemon().then(result => {
      this.pokemon = result;
    }).catch(error => {
      console.error(error);
    });
  }
}
