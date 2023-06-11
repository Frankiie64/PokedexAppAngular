import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'http://localhost:9002/api/v1/Pokemon';

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.baseUrl}/getAll`);
  }
}
