import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { RouterPath } from 'src/app/routes.enum';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent {
  faUserCircle = faUserCircle;

  constructor(private readonly router: Router) {}

  toTheLoginPage() {
    this.router.navigate([RouterPath.Login]);
  }
}
