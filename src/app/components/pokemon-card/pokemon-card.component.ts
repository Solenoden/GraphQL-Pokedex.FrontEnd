import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models/Pokemon";
import {PokemonType} from "../../enums/PokemonType";
import {PokemonLogic} from "../../logic/PokemonLogic";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input('pokemon') pokemon: Pokemon;

  public typeColor: string = PokemonType.Normal;

  constructor() { }

  ngOnInit(): void {
    this.getTypeColor();
  }

  private getTypeColor(): void {
    this.typeColor = PokemonLogic.getTypeColor(this.pokemon.type);
  }
}
