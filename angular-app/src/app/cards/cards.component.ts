import { Component, OnInit } from '@angular/core';
import { Character } from '../character.module';
import { Observable } from 'rxjs';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  number = 1;
  character: Character;
  characters$: Observable<Character>;

  constructor(private characterService: CharacterService) {}

  getNextPage(): void {
    if (this.number < 195) {
      this.number += 1;
    } else {
      this.number = 1;
    }
    this.characters$ = this.characterService.getCharacters(this.number);
  }

  getPrevPage(): void {
    if (this.number > 1) {
      this.number -= 1;
    } else {
      this.number = 194;
    }
    console.log(this.number)
    this.characters$ = this.characterService.getCharacters(this.number);
  }

  ngOnInit(): void {
   this.characters$ = this.characterService.getCharacters(this.number);
  }
}
