import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { SearchServiceService } from 'src/app/core/services/search-service.service';
import { RouterPath } from 'src/app/routes.enum';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent {
  faUserCircle = faUserCircle;

  userEmail$: Observable<string>;

  constructor(
    private readonly router: Router,
    private readonly searchService: SearchServiceService
  ) {
    this.userEmail$ = this.searchService.userEmailObs$;
  }

  toTheLoginPage() {
    this.router.navigate([RouterPath.Login]);
  }
}
