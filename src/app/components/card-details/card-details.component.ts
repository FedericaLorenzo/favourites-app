import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICharacter } from '../../shared/models/character.model';
import { NgClass } from '@angular/common';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css',
})
export class CardDetailsComponent implements OnInit {
  @Input() detail!: ICharacter;

  isFavourite = false;
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.isFavourite = this.characterService.isFavourites(this.detail);
    console.log(this.characterService.favourites);
  }

  toggleStar() {
    this.isFavourite = !this.isFavourite;
    if (this.isFavourite) {
      this.characterService.addFavourite(this.detail);
      console.log(this.characterService.favourites);
    } else {
      this.characterService.removeFavourite(this.detail);
    }
  }
}
