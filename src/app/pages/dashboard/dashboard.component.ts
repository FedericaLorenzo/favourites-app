import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ICharacter, IInfo } from '../../shared/models/character.model';
import { Router } from '@angular/router';
import { AppPathsEnum } from '../../app-paths.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  charList: ICharacter[] = [];
  favList: ICharacter[] = [];
  infoPage!: IInfo;

  currPage: number = 1;

  constructor(private charService: CharacterService, private router: Router) {
    this.onChangePage(1);
  }

  onNextPage() {
    this.onChangePage(this.currPage++);
  }

  onPrevPage() {
    this.onChangePage(this.currPage--);
  }

  onChangePage(page: number) {
    this.charService.goToPage(page).subscribe((res) => {
      this.charList = res.results;
      this.infoPage = res.info;
    });
  }

  onGoToDetailsPage(charactedId: number): void {
    this.router.navigate([AppPathsEnum.DETAILS, charactedId]);
  }

  isFirstPage() {
    return this.currPage <= 1;
  }

  isLastPage() {
    return this.currPage >= this.infoPage?.pages;
  }
}
