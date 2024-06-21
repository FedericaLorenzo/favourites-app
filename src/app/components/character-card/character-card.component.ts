import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../shared/models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css',
  standalone: true,

})
export class CharacterCardComponent {
  @Input() character!: ICharacter;

  @Output() goToDetails: EventEmitter<number> = new EventEmitter();



  onGoToDetails(): void {
    this.goToDetails.emit(this.character.id)
  }
}
