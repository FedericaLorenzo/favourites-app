import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppPathsEnum } from '../../app-paths.enum';
import { CharacterService } from '../../services/character.service';
import { switchMap } from 'rxjs';
import { NgClass, NgIf } from '@angular/common';
import { CardDetailsComponent } from '../../components/card-details/card-details.component';
import { ICharacter } from '../../shared/models/character.model';

@Component({
  selector: 'app-details',
  standalone: true,
  providers: [],
  imports: [NgIf, CardDetailsComponent, NgClass],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  detail!: ICharacter;
  isFavourite: boolean = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private charService: CharacterService
  ) {
    this.activatedRoute.params
      .pipe(switchMap((params) => this.charService.getDetails(params['id'])))
      .subscribe((details) => {
        console.log(details);
        this.detail = details;
      });
  }

  onGoBack(): void {
    this.router.navigate([AppPathsEnum.DASHBOARD]);
  }

  // constructor(private charService: CharacterService, private router: Router) {
  //   this.onChangePage(1);
  //   // this.charService.getAllCharacters().subscribe((res) => {
  //   //   this.charList = res.results;
  //   //   this.infoPage = res.info;
  //   // });
  // }

  // onNextPage() {
  //   this.onChangePage(this.currPage++);
  // }

  // onPrevPage() {
  //   this.onChangePage(this.currPage--);
  // }

  // onChangePage(page: number) {
  //   this.charService.goToPage(page).subscribe((res) => {
  //     this.charList = res.results;
  //     this.infoPage = res.info;
  //   });
  // }

  // onGoToDetailsPage(charactedId: number): void {
  //   this.router.navigate([AppPathsEnum.DETAILS, charactedId]);
  // }

  // isFirstPage() {
  //   return this.currPage <= 1;
  // }

  // isLastPage() {
  //   return this.currPage >= this.infoPage.pages;
  // }
}
