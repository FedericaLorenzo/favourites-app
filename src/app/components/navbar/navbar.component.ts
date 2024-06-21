import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppPathsEnum } from '../../app-paths.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}
  goToFavouries() {
    this.router.navigate([AppPathsEnum.FAVOURITES]);
  }
}
