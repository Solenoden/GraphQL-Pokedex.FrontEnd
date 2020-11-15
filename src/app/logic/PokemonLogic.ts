import {PokemonType} from "../enums/PokemonType";
import {PokemonTypeColor} from "../enums/PokemonTypeColor";

export class PokemonLogic {
  static getTypeColor(type: PokemonType | string): PokemonTypeColor {
    type = type.toLowerCase();

    switch (type) {
      case PokemonType.Fire: return PokemonTypeColor.Fire;
      case PokemonType.Water: return PokemonTypeColor.Water;
      case PokemonType.Electric: return PokemonTypeColor.Electric;
      case PokemonType.Grass: return PokemonTypeColor.Grass;
      case PokemonType.Ice: return PokemonTypeColor.Ice;
      case PokemonType.Fighting: return PokemonTypeColor.Fighting;
      case PokemonType.Poison: return PokemonTypeColor.Poison;
      case PokemonType.Ground: return PokemonTypeColor.Ground;
      case PokemonType.Flying: return PokemonTypeColor.Flying;
      case PokemonType.Psychic: return PokemonTypeColor.Psychic;
      case PokemonType.Bug: return PokemonTypeColor.Bug;
      case PokemonType.Rock: return PokemonTypeColor.Rock;
      case PokemonType.Ghost: return PokemonTypeColor.Ghost;
      case PokemonType.Dragon: return PokemonTypeColor.Dragon;
      case PokemonType.Dark: return PokemonTypeColor.Dark;
      case PokemonType.Steel: return PokemonTypeColor.Steel;
      case PokemonType.Fairy: return PokemonTypeColor.Fairy;
      default: return PokemonTypeColor.Normal;
    }
  }
}
