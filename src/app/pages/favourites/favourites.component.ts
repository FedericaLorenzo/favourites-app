import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppPathsEnum } from '../../app-paths.enum';
import { CharacterService } from '../../services/character.service';
import { switchMap } from 'rxjs';
import { NgClass, NgIf } from '@angular/common';
import { CardDetailsComponent } from '../../components/card-details/card-details.component';
import { ICharacter } from '../../shared/models/character.model';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';

@Component({
  selector: 'app-favourites',
  standalone: true,
  providers: [],
  imports: [NgIf, CharacterCardComponent, NgClass],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css',
})
export class FavouritesComponent implements OnInit {
  charList: ICharacter[] = [];
  constructor(
    private router: Router,

    private charService: CharacterService
  ) {}

  ngOnInit(): void {
    this.charList = this.charService.favourites;
  }

  onGoBack(): void {
    this.router.navigate([AppPathsEnum.DASHBOARD]);
  }

  onGoToDetailsPage(charactedId: number): void {
    this.router.navigate([AppPathsEnum.DETAILS, charactedId]);
  }
}
