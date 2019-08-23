import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character.module';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';



const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';
const url = new URL('https://www.potterapi.com/v1/characters/'), params = {key: key}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
console.log(url)

@Injectable()
export class CharacterService {
  url = url;

  constructor(private http: HttpClient) {}

  getCharacters(num): Observable<Character>  {
    return this.http.get<any>(`${this.url}`).pipe(
      mergeMap(
        characters => {
          console.log(characters)
          return characters
        },
          (character) => {
            console.log(character[num])
            return character[num]
          }
      
      )
    )
  }


  
}
