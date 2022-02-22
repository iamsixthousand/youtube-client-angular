import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterPath } from 'src/app/routes.enum';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  constructor(private readonly router: Router) {}

  toTheMainPage() {
    this.router.navigate([RouterPath.SearchResultPage]);
  }
}
