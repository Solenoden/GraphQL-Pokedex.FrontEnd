import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('Pokemon')
export class Pokemon {
  @JsonProperty('id', String, true)
  public id: string = undefined;

  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('type', String, true)
  public type: string = undefined;

  @JsonProperty('evolvesFromId', String, true)
  public evolvesFromId: string = undefined;

  @JsonProperty('evolvesToId', String, true)
  public evolvesToId: string = undefined;
}
