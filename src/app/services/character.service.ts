import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ICharacter,
  ICharacterResponse,
} from '../shared/models/character.model';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private baseURL: string = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) {
    console.log('fukc');
  }

  favourites: ICharacter[] = [];

  getAllCharacters(): Observable<ICharacterResponse> {
    return this.http.get<ICharacterResponse>(this.baseURL);
  }

  goToPage(page: number) {
    return this.http.get<ICharacterResponse>(`${this.baseURL}/?page=${page}`);
  }

  getNextOrPrevPage(url: string): Observable<ICharacterResponse> {
    return this.http.get<ICharacterResponse>(url);
  }

  getDetails(id: number): Observable<ICharacter> {
    return this.http.get<ICharacter>(`${this.baseURL}/${id}`);
  }

  addFavourite(character: ICharacter) {
    this.favourites.push(character);
  }

  removeFavourite(character: ICharacter) {
    this.favourites = this.favourites.filter((fav) => fav.id !== character.id);
  }

  isFavourites(character: ICharacter) {
    return this.favourites.some((fav) => fav.id === character.id);
  }
}
