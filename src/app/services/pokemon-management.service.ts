import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PokemonManagementService {
  url = 'http://localhost:3331/api/';

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<any> {
    return this.http.get<Pokemon[]>(this.url + 'pokemons');
  }
  deletePokemon(nom: string){
    return this.http.delete(this.url + 'pokemons/' + nom, httpOptions).subscribe();
  }
  addPokemon(nom: any): Observable<any>{
    return this.http.post(this.url + 'pokemons', nom);
  }
}
