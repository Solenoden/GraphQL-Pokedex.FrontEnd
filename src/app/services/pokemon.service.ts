import {Injectable} from "@angular/core";
import {CommonService} from "./common.service";
import {gql} from "@apollo/client";
import {Pokemon} from "../models/Pokemon";
import {JsonConvert, ValueCheckingMode} from "json2typescript";

@Injectable({providedIn: 'root'})
export class PokemonService {
  constructor(
    private commonService: CommonService
  ) {
  }

  public getAllPokemon(): Promise<Pokemon[]> {
    return new Promise<Pokemon[]>((resolve, reject) => {
      this.commonService.get(gql`
        {
          pokemonGetAll {
            id,
            name,
            type,
            evolvesFromId,
            evolvesToId
          }
        }
      `).subscribe(result => {
        const data = result.data as any;
        let jsonConvert = new JsonConvert();
        jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;

        const pokemon = jsonConvert.deserializeArray(data.pokemonGetAll, Pokemon);
        resolve(pokemon);
      }, error => {
        reject(error);
      });
    });
  }
}
