import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs";
import {ApolloQueryResult} from "@apollo/client/core";

@Injectable({providedIn: 'root'})
export class CommonService {
  constructor(
    private apollo: Apollo
  ) {
  }

  public get(query): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({query: query}).valueChanges;
  }
}
